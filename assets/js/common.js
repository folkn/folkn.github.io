$(document).ready(function () {
  // add toggle functionality to abstract and award buttons
  $("a.abstract").click(function () {
    $(this).parent().parent().find(".abstract.hidden").toggleClass("open");
    $(this).parent().parent().find(".award.hidden.open").toggleClass("open");
  });
  $("a.award").click(function () {
    $(this).parent().parent().find(".abstract.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".award.hidden").toggleClass("open");
  });

  // show BibTeX in a dialog and make the entry easy to copy
  $("button.bibtex").click(function () {
    const dialog = document.getElementById($(this).attr("aria-controls"));
    if (dialog) {
      dialog.showModal();
    }
  });
  $(".bibtex-dialog .bibtex-close").click(function () {
    $(this).closest("dialog")[0].close();
  });
  $(".bibtex-dialog").click(function (event) {
    if (event.target === this) {
      this.close();
    }
  });
  $(".bibtex-copy").click(async function () {
    const dialog = $(this).closest("dialog")[0];
    const bibtex = dialog.querySelector(".bibtex-entry").textContent.trim();
    const status = dialog.querySelector(".bibtex-copy-status");

    try {
      await window.navigator.clipboard.writeText(bibtex);
      status.textContent = "Copied to clipboard.";
    } catch (_error) {
      const textArea = document.createElement("textarea");
      textArea.value = bibtex;
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.select();
      const copied = document.execCommand("copy");
      textArea.remove();
      status.textContent = copied ? "Copied to clipboard." : "Select the entry above and copy it manually.";
    }
  });
  $("a").removeClass("waves-effect waves-light");

  // bootstrap-toc
  if ($("#toc-sidebar").length) {
    // remove related publications years from the TOC
    $(".publications h2").each(function () {
      $(this).attr("data-toc-skip", "");
    });
    var navSelector = "#toc-sidebar";
    var $myNav = $(navSelector);
    Toc.init($myNav);
    $("body").scrollspy({
      target: navSelector,
      offset: 100,
    });
  }

  // add css to jupyter notebooks
  const cssLink = document.createElement("link");
  cssLink.href = "../css/jupyter.css";
  cssLink.rel = "stylesheet";
  cssLink.type = "text/css";

  let jupyterTheme = determineComputedTheme();

  $(".jupyter-notebook-iframe-container iframe").each(function () {
    $(this).contents().find("head").append(cssLink);

    if (jupyterTheme == "dark") {
      $(this).bind("load", function () {
        $(this).contents().find("body").attr({
          "data-jp-theme-light": "false",
          "data-jp-theme-name": "JupyterLab Dark",
        });
      });
    }
  });

  // trigger popovers
  $('[data-toggle="popover"]').popover({
    trigger: "hover",
  });
});
