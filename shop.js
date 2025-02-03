// Open the popup and load the "shop.html" page inside the iframe
function openPopup() {
    document.getElementById('shop-popup').style.display = 'block';
    document.getElementById('shop-iframe').src = 'shop.html'; // Load the shop page
  
    // Optionally, add an overlay to dim the background
    var overlay = document.createElement('div');
    overlay.classList.add('popup-overlay');
    overlay.onclick = closePopup; // Close on overlay click
    document.body.appendChild(overlay);
  }
  
  // Close the popup
  function closePopup() {
    document.getElementById('shop-popup').style.display = 'none';
    document.getElementById('shop-iframe').src = ''; // Clear iframe source to stop loading
  
    // Remove the overlay
    var overlay = document.querySelector('.popup-overlay');
    if (overlay) {
      overlay.remove();
    }
  }
  