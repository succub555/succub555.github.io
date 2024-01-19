$(document).ready(function () {
    var description = $(".main-content .description");
    var headerHeight = $("header").outerHeight();
    var pinningPoint = headerHeight + 200; // Adjust as needed
    var isPinningEnabled = false;

    function checkPinning() {
      var scrollPosition = $(window).scrollTop();

      if (scrollPosition > pinningPoint && !isPinningEnabled) {
        description.addClass("pinned");
        isPinningEnabled = true;
      } else if (scrollPosition <= pinningPoint && isPinningEnabled) {
        description.removeClass("pinned");
        isPinningEnabled = false;
      }
    }

    // Call the checkPinning function on scroll
    $(window).scroll(checkPinning);

    // Call the checkPinning function on window load to check initial scroll position
    checkPinning();
  });