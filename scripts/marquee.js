var marqueeElement = document.querySelector('.marquee');

function startMarquee() {
  marqueeElement.style.animation = 'marqueeScrollLeft 30s linear infinite';
}

function stopMarquee() {
  marqueeElement.style.animation = 'none';
}