const clips = document.querySelectorAll('.clip');

clips.forEach(clip => {
    clip.addEventListener('mouseenter', () => {
        clip.play(); // Play the video when hovered
    });

    clip.addEventListener('mouseleave', () => {
        clip.pause(); // Pause the video when hover ends
        clip.currentTime = 0; // Reset the video to the beginning
    });
});
