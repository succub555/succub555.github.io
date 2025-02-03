const popup = document.getElementById("popup");

let offsetX = 0, offsetY = 0, isDragging = false;

popup.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - popup.offsetLeft;
    offsetY = e.clientY - popup.offsetTop;
});

document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    popup.style.left = `${e.clientX - offsetX}px`;
    popup.style.top = `${e.clientY - offsetY}px`;
});

document.addEventListener("mouseup", () => {
    isDragging = false;
});
