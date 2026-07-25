/*
  Replaces the homepage content with an "unsupported region" message for visitors
  whose IP address geolocates to Thailand. The content is hidden by default via
  inline style (see about.liquid) to avoid a flash of content before this script
  runs; it is only revealed once we've confirmed the visitor is NOT in Thailand,
  or if the geolocation lookup fails (fail-open).
*/
(function () {
  var gate = document.getElementById('geo-gate');
  var unsupported = document.getElementById('geo-unsupported');
  if (!gate) return;

  var resolved = false;
  function reveal() {
    if (resolved) return;
    resolved = true;
    gate.style.visibility = 'visible';
  }
  function showUnsupported() {
    if (resolved) return;
    resolved = true;
    if (unsupported) unsupported.style.display = '';
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
        showUnsupported();
        return;
      }
      reveal();
    })
    .catch(function () {
      clearTimeout(fallbackTimer);
      reveal();
    });
})();
