const videos = document.querySelectorAll('.video');

videos.forEach(video => {
  video.play(); // Start playing
  video.muted = true; // Start muted

  // Unmute on hover
  video.addEventListener('mouseover', () => {
    video.muted = false;
  });

  // Mute again when hover ends
  video.addEventListener('mouseout', () => {
    video.muted = true;
  });

  // Drag functionality
  let isDragging = false;
  let offsetX, offsetY;

  video.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - video.getBoundingClientRect().left;
    offsetY = e.clientY - video.getBoundingClientRect().top;
    video.style.cursor = "grabbing";
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    video.style.left = `${e.clientX - offsetX}px`;
    video.style.top = `${e.clientY - offsetY}px`;
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
    video.style.cursor = "grab";
  });

  // Set initial cursor
  video.style.cursor = "grab";
});
