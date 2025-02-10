document.addEventListener("DOMContentLoaded", function () {
    console.log("Mobile Toggle Script Loaded");

    // Create the toggle button
    const toggleButton = document.createElement("div");
    toggleButton.id = "mobileToggle";
    toggleButton.innerHTML = "+";
    document.body.appendChild(toggleButton);

    // Style the button
    Object.assign(toggleButton.style, {
        position: "fixed",
        top: "0px",
        right: "20px",
        fontSize: "3rem",
        fontFamily: "'Helvetica Neue', sans-serif",
        fontWeight: "900",
        color: "black",
        cursor: "pointer",
        transition: "transform 0.3s ease, color 0.3s ease",
        zIndex: "2002",
        userSelect: "none"
    });

    // Create the mobile description
    const mobileDescription = document.createElement("div");
    mobileDescription.id = "mobileDescription";
    mobileDescription.innerHTML = `
        خضراء سارة (SARAH KHADRA), WORKING UNDER THE ALIAS @SUCCUBI, IS A MULTIMEDIA ARTIST BASED IN BERLIN, GERMANY. 
        CREATING AUDIO AND VISUAL NARRATIVES INSPIRED BY — 
        THE 2000-2010S INTERNET CULTURE — ANIME — EARLY 3D VIDEO GAME GRAPHICS — 
        HOME GAMING CONSOLES — FANTASY LORE & AESTHETICS — CULT CLASSIC HORROR — 
        THE IDEA OF COLLECTIBLES AND FAIRY TALES.
    `;
    document.body.appendChild(mobileDescription);

    // Style the mobile description (HIDDEN BY DEFAULT)
    Object.assign(mobileDescription.style, {
        position: "fixed",
        top: "0",
        left: "0",
        width: "100vw",
        height: "100vh",
        backgroundColor: "black",
        color: "#f8182d",
        padding: "20px",
        fontSize: "1.5rem",
        fontFamily: "'VCR_OSD_MONO', monospace",
        fontWeight: "900",
        textAlign: "left",
        display: "flex",
        alignItems: "center",
        zIndex: "2000",
        opacity: "0", // Ensure it's fully invisible
        visibility: "hidden", // Hide it until toggled
        transition: "opacity 0.3s ease, visibility 0.3s ease"
    });

    // Force it to be hidden on page load (backup method)
    setTimeout(() => {
        mobileDescription.style.opacity = "0";
        mobileDescription.style.visibility = "hidden";
    }, 50);

    // Toggle function
    function toggleDescription() {
        if (mobileDescription.style.opacity === "0") {
            mobileDescription.style.opacity = "1";
            mobileDescription.style.visibility = "visible";
            toggleButton.style.transform = "rotate(45deg)";
            toggleButton.style.color = "#f8182d";
        } else {
            mobileDescription.style.opacity = "0";
            mobileDescription.style.visibility = "hidden";
            toggleButton.style.transform = "rotate(0deg)";
            toggleButton.style.color = "black";
        }
    }

    // Add click event
    toggleButton.addEventListener("click", toggleDescription);

    // Hide elements when resizing to desktop
    function handleResize() {
        if (window.innerWidth > 768) {
            mobileDescription.style.opacity = "0";
            mobileDescription.style.visibility = "hidden";
            toggleButton.style.display = "none";
        } else {
            toggleButton.style.display = "block";
        }
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // Run on load
});
