document.addEventListener('DOMContentLoaded', function () {
  const aboutLink = document.getElementById('aboutLink');
  const descriptionDiv = document.getElementById('aboutDescription');
  const closeButton = document.createElement('span'); // Create close button
  closeButton.innerHTML = '&times;'; // Add "x" character
  closeButton.className = 'close-button';
  document.body.appendChild(closeButton); // Append close button to the body

  let descriptionVisible = false;

  const toggleDescriptionText = () => {
    descriptionVisible = !descriptionVisible;
    descriptionDiv.classList.toggle('visible', descriptionVisible);
    updateBlurStyles();
  };

  const removeBlurFromLink = (link) => {
    link.style.filter = 'blur(0)';
  };

  const updateBlurStyles = () => {
    // Toggle blur class based on description visibility
    document.body.classList.toggle('blur-about', descriptionVisible);

    // Remove blur from aboutLink if it was blurred
    if (!descriptionVisible && aboutLink.style.filter === 'blur(0.1px)') {
      removeBlurFromLink(aboutLink);
    }
  };

  aboutLink.addEventListener('click', function (event) {
    event.preventDefault();
    toggleDescriptionText();
  });

  document.addEventListener('click', function (event) {
    // Check if the clicked element is outside the description and the link
    const isClickInsideDescription = descriptionDiv.contains(event.target);
    const isClickInsideLink = event.target === aboutLink;

    if (!isClickInsideDescription && !isClickInsideLink && descriptionVisible) {
      toggleDescriptionText();
    }
  });

  closeButton.addEventListener('click', function () {
    toggleDescriptionText();
  });
});
