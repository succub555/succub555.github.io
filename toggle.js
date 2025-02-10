document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded");

    function toggleSection(section) {
        console.log(`Toggling: ${section.id}`);

        // Check current display state
        if (section.style.display === "none" || section.classList.contains("hidden")) {
            section.style.display = "block";
            section.classList.remove("hidden");
        } else {
            section.style.display = "none";
            section.classList.add("hidden");
        }
    }

    // Get buttons and content sections
    const csBtn = document.getElementById("cs-btn");
    const psBtn = document.getElementById("ps-btn");
    const watchMeBtn = document.getElementById("watchMe");
    const creativeServices = document.getElementById("creative-services");
    const personalProjects = document.getElementById("personal-projects");
    const videoContent = document.getElementById("video-content");

    // Event listener for "Creative Services" button
    csBtn.addEventListener("click", function () {
        console.log("Creative Services Button Clicked");
        toggleSection(creativeServices);

        // Hide other sections
        personalProjects.style.display = "none";
        personalProjects.classList.add("hidden");
        videoContent.style.display = "none";
        videoContent.classList.add("hidden");
    });

    // Event listener for "Personal Projects" button
    psBtn.addEventListener("click", function () {
        console.log("Personal Projects Button Clicked");
        toggleSection(personalProjects);

        // Hide other sections
        creativeServices.style.display = "none";
        creativeServices.classList.add("hidden");
        videoContent.style.display = "none";
        videoContent.classList.add("hidden");
    });

    // Event listener for "Watch Me" button
    watchMeBtn.addEventListener("click", function () {
        console.log("Watch Me Button Clicked");

        // If video content is hidden, show it and hide creative services
        if (videoContent.style.display === "none" || videoContent.classList.contains("hidden")) {
            console.log("Showing video content and hiding creative services");
            videoContent.style.display = "block";
            videoContent.classList.remove("hidden");
            creativeServices.style.display = "none";
            creativeServices.classList.add("hidden");
        } else {
            console.log("Hiding video content and showing creative services");
            videoContent.style.display = "none";
            videoContent.classList.add("hidden");
            creativeServices.style.display = "block";
            creativeServices.classList.remove("hidden");
        }
    });
});
