document.addEventListener('mousemove', (event) => {
  const galleryItem = document.querySelector('.gallery-item:hover');
  if (galleryItem) {
    const figcaption = galleryItem.querySelector('figcaption');
    if (figcaption) {
      const mouseX = event.clientX;
      const mouseY = event.clientY + window.scrollY;
      figcaption.style.left = mouseX + 'px';
      figcaption.style.top = mouseY + 'px';
    }
  }
});
