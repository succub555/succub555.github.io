// Function to toggle between content sections
function toggleContent(contentIdToShow, contentIdToHide) {
    const contentToShow = document.getElementById(contentIdToShow);
    const contentToHide = document.getElementById(contentIdToHide);

    // Log for debugging
    console.log(`Toggling content: Show '${contentIdToShow}' and Hide '${contentIdToHide}'`);

    // Only hide the section if it's currently visible
    if (contentToHide.style.display !== 'none') {
        contentToHide.style.display = 'none';
    }

    // Only show the section if it's currently hidden
    if (contentToShow.style.display === 'none' || contentToShow.style.display === '') {
        contentToShow.style.display = 'block';
    }
}

// Event listener for the "Creative Services" button
document.getElementById('cs-btn').addEventListener('click', function() {
    console.log("Creative Services Button Clicked");

    // Hide video content if it's showing
    const videoContent = document.getElementById('video-content');
    if (videoContent.style.display === 'block' || videoContent.style.display === '') {
        videoContent.style.display = 'none'; // Hide video content
        console.log("Video content hidden");
    }

    // Toggle to show creative services and hide personal projects
    toggleContent('creative-services', 'personal-projects');
});

// Event listener for the "Personal Projects" button
document.getElementById('ps-btn').addEventListener('click', function() {
    console.log("Personal Projects Button Clicked");

    // Hide video content if it's showing
    const videoContent = document.getElementById('video-content');
    if (videoContent.style.display === 'block' || videoContent.style.display === '') {
        videoContent.style.display = 'none'; // Hide video content
        console.log("Video content hidden");
    }

    // Toggle to show personal projects and hide creative services
    toggleContent('personal-projects', 'creative-services');
});

// Event listener for the "Watch Me" button to toggle video content
document.getElementById('watchMe').addEventListener('click', function() {
    const creativeServices = document.getElementById('creative-services');
    const videoContent = document.getElementById('video-content');

    console.log("Watch Me Button Clicked");

    // If video content is hidden, show it; otherwise, hide it
    if (videoContent.style.display === 'none' || videoContent.style.display === '') {
        console.log("Showing video content and hiding creative services");
        creativeServices.style.display = 'none';  // Hide creative services
        videoContent.style.display = 'block';     // Show video content
    } else {
        console.log("Hiding video content and showing creative services");
        videoContent.style.display = 'none';      // Hide video content
        creativeServices.style.display = 'block'; // Show creative services
    }
});
