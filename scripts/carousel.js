document.addEventListener('DOMContentLoaded', function () {
  const carouselContainer = document.querySelector('.carousel-scroll-container');
  const carouselControlsTemplate = document.getElementById('carousel-controls');
  const carouselControls = carouselControlsTemplate.content.cloneNode(true);

  carouselContainer.appendChild(carouselControls);

  const prevButton = document.querySelector('.carousel-control[data-direction="start"]');
  const nextButton = document.querySelector('.carousel-control[data-direction="end"]');
  const scrollContainer = document.querySelector('.carousel-scroll-container');
  const customCursor = document.querySelector('.custom-cursor');
  const header = document.querySelector('header');
  const footer = document.querySelector('.footer');

  // Function to handle navigation to the previous slide
  const goToPreviousSlide = () => {
    const slideWidth = getSlideWidth();
    const scrollAmount = scrollContainer.scrollLeft - slideWidth;
    scrollContainer.scrollTo({
      left: Math.max(scrollAmount, 0),
      behavior: 'smooth',
    });
  };

  // Function to handle navigation to the next slide
  const goToNextSlide = () => {
    const slideWidth = getSlideWidth();
    const scrollAmount = scrollContainer.scrollLeft + slideWidth;
    scrollContainer.scrollTo({
      left: Math.min(scrollAmount, scrollContainer.scrollWidth - scrollContainer.offsetWidth),
      behavior: 'smooth',
    });
  };

  // Function to get the width of a single slide based on the current image size
  const getSlideWidth = () => {
    const slides = document.querySelectorAll('.carousel-item');
    const lastSlide = slides[slides.length - 1];
    const slideWidth = lastSlide ? lastSlide.offsetWidth : scrollContainer.offsetWidth;
    return slideWidth;
  };

  // Initial state: Hide the previous button
  prevButton.style.visibility = 'hidden';

  // Intersection Observer to detect when the first slide is fully visible
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio >= 1) {
        prevButton.style.visibility = 'hidden';
      } else {
        prevButton.style.visibility = 'visible';
      }
    });
  });

  // Observe the first slide
  const firstSlide = document.querySelector('.carousel-item:first-child');
  observer.observe(firstSlide);

  // Event listeners for the navigation buttons
  prevButton.addEventListener('click', goToPreviousSlide);
  nextButton.addEventListener('click', goToNextSlide);

  // Check if there are no more images to display and hide corresponding navigation button
  scrollContainer.addEventListener('scroll', () => {
    const scrollPosition = scrollContainer.scrollLeft;
    const maxScroll = scrollContainer.scrollWidth - scrollContainer.offsetWidth;

    prevButton.style.visibility = scrollPosition > 0 ? 'visible' : 'hidden';
    nextButton.style.visibility = scrollPosition < maxScroll ? 'visible' : 'hidden';
  });

  // Add click event listeners to left and right click areas
  const leftClickArea = document.getElementById('left-click-area');
  const rightClickArea = document.getElementById('right-click-area');

  leftClickArea.addEventListener('click', goToPreviousSlide);
  rightClickArea.addEventListener('click', goToNextSlide);

  const body = document.body;

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
