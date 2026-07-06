/*
  Hides the homepage content for visitors whose IP address geolocates to Thailand.
  The content is hidden by default via inline style (see about.liquid) to avoid a
  flash of content before this script runs; it is only revealed once we've confirmed
  the visitor is NOT in Thailand, or if the geolocation lookup fails (fail-open).
*/
(function () {
  var gate = document.getElementById('geo-gate');
  if (!gate) return;

  var revealed = false;
  function reveal() {
    if (revealed) return;
    revealed = true;
    gate.style.visibility = 'visible';
  }

  // Fail-open safeguard: never leave the page blank forever if the geolocation
  // service is slow, blocked, or unavailable.
  var fallbackTimer = setTimeout(reveal, 4000);

  fetch('https://ipapi.co/json/', { cache: 'no-store' })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      clearTimeout(fallbackTimer);
      if (data && data.country_code === 'TH') {
        // Leave the content hidden for Thailand-based visitors.
        return;
      }
      reveal();
    })
    .catch(function () {
      clearTimeout(fallbackTimer);
      reveal();
    });
})();
