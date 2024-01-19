document.addEventListener('DOMContentLoaded', function () {
  const videoLink = document.getElementById('videoLink');
  const videoContainer = document.getElementById('video-container');
  const video = document.getElementById('video');
  const videoSource = document.getElementById('video-source');
  const closeBtn = document.getElementById('close-btn');
  const customCursor = document.querySelector('.custom-cursor');
  const body = document.body;

  // Function to close the video container
  function closeVideoContainer() {
    video.pause();
    videoContainer.style.display = 'none';
    document.body.classList.remove('playing-video');
    hideCloseButton(); // Hide the close button when closing the video
  }

  videoLink.addEventListener('click', function () {
    const videoSrc = videoLink.getAttribute('data-video-src');
    videoSource.setAttribute('src', videoSrc);
    video.load();

    // Add the fade-in class when displaying the video container
    videoContainer.style.display = 'block';
    videoContainer.classList.add('fade-in');

    // Play the video immediately
    video.play();
    document.body.classList.add('playing-video');
    showCloseButton(); // Show the close button when playing the video

    // Hide the custom cursor when the video is clicked
    customCursor.style.visibility = 'hidden';
    body.style.cursor = 'default';
  });

  closeBtn.addEventListener('click', closeVideoContainer);

  // Close the video container when pressing the "Escape" key
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeVideoContainer();
    }
  });

  // Update body class based on video play and pause events
  video.addEventListener('play', function () {
    document.body.classList.add('playing-video');
    showCloseButton(); // Show the close button when the video is playing
  });

  video.addEventListener('pause', function () {
    document.body.classList.remove('playing-video');
    hideCloseButton(); // Hide the close button when the video is paused
  });

  // Function to show the close button
  function showCloseButton() {
    closeBtn.style.display = 'block';
  }

  // Function to hide the close button
  function hideCloseButton() {
    closeBtn.style.display = 'none';
  }

  // Custom cursor logic
  document.addEventListener('mousemove', (e) => {
    const cursorPosition = e.clientX / window.innerWidth; // Get position as a ratio

    // Adjust the height of the header and footer areas
    const headerMultiplier = 2; // Increase the height by 100%
    const footerMultiplier = 3; // Increase the height by 200%

    const headerHeight = header.offsetHeight * headerMultiplier;
    const footerHeight = footer.offsetHeight * footerMultiplier;

    // Check if the cursor is in the header or footer
    const isInHeader = e.clientY < headerHeight;
    const isInFooter = e.clientY > window.innerHeight - footerHeight;

    // Check if the video is playing
    const isVideoPlaying = body.classList.contains('playing-video');

    if (isInHeader || isInFooter || isVideoPlaying) {
      // Show the default cursor
      customCursor.style.visibility = 'hidden';
      body.style.cursor = 'default';
    } else {
      // Set cursor image based on the horizontal position
      if (cursorPosition < 0.5) {
        customCursor.style.backgroundImage = 'url("assets/left-arrow.png")';
      } else {
        customCursor.style.backgroundImage = 'url("assets/right-arrow.png")';
      }

      // Adjust cursor position
      const offsetX = customCursor.offsetWidth / 2;
      const offsetY = customCursor.offsetHeight / 2;
      customCursor.style.left = `${e.clientX - offsetX}px`;
      customCursor.style.top = `${e.clientY - offsetY}px`;

      // Show the custom cursor
      customCursor.style.visibility = 'visible';
      body.style.cursor = 'none'; // Hide the default cursor
    }
  });
});
