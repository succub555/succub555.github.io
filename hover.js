const hoverTitle = document.getElementById('hover-title');
let draggableImages = document.querySelectorAll('.draggable-img');

draggableImages.forEach(img => {
    img.addEventListener('mouseenter', (e) => {
        hoverTitle.textContent = e.target.title; // Set the hover title
        hoverTitle.style.display = 'block'; // Show the title
    });

    img.addEventListener('mouseleave', () => {
        hoverTitle.style.display = 'none'; // Hide the title when not hovering
    });
});