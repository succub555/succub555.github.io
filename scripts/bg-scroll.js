$(document).ready(function () {
    var background = $(".background");
    var pinningOffset = 0.5 * $(window).height(); // Half of the window height

    $(window).scroll(function () {
      var scrollPosition = $(window).scrollTop();

      // Check if the scroll position is beyond the pinning offset
      if (scrollPosition > pinningOffset) {
        // Add the "pinned" class to the background
        background.addClass("pinned");
      } else {
        // Remove the "pinned" class if scrolled back up
        background.removeClass("pinned");
      }
    });
  });