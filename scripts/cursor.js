    document.addEventListener('mousemove', (event) => {
      const figcaption = document.querySelector('.gallery-frame:hover figcaption');
      if (figcaption) {
        const mouseX = event.clientX;
        const mouseY = event.clientY + window.scrollY;
        figcaption.style.left = mouseX + 'px';
        figcaption.style.top = mouseY + 'px';
      }
    });