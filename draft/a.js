// Define variables
let favorites = [];
const maxFavorites = 5;

// Get DOM elements
const mainImage = document.getElementById("mainImage");
const favoritesArea = document.getElementById("favoritesArea");
const addFavoriteBtn = document.getElementById("addFavoriteBtn");

// Add event listener to main image
mainImage.addEventListener("click", function() {
  // Create new window with zoomed image
  const zoomWindow = window.open(this.src, "Zoomed Image", "width=800,height=600");
  // Add button to window to add image to favorites
  const addToFavoritesBtn = zoomWindow.document.createElement("button");
  addToFavoritesBtn.textContent = "Add to favorites";
  addToFavoritesBtn.addEventListener("click", function() {
    // Check if max favorites have been reached
    if (favorites.length >= maxFavorites) {
      alert("Please remove at least one favorite first.");
      return;
    }
    // Add image to favorites
    favorites.push(mainImage.src);
    // Add image node to favorites area
    const favoriteImage = document.createElement("img");
    favoriteImage.src = mainImage.src;
    favoriteImage.addEventListener("click", function() {
      // Show remove button
      const removeFavoriteBtn = this.nextElementSibling;
      removeFavoriteBtn.style.display = "inline-block";
    });
    const removeFavoriteBtn = document.createElement("button");
    removeFavoriteBtn.textContent = "Remove";
    removeFavoriteBtn.style.display = "none";
    removeFavoriteBtn.addEventListener("click", function() {
      // Remove image from favorites
      const index = favorites.indexOf(mainImage.src);
      if (index > -1) {
        favorites.splice(index, 1);
      }
      // Remove image node from favorites area
      favoritesArea.removeChild(this.previousElementSibling);
      favoritesArea.removeChild(this);
    });
    favoritesArea.appendChild(favoriteImage);
    favoritesArea.appendChild(removeFavoriteBtn);
    // Disable add to favorites button
    addFavoriteBtn.disabled = true;
    addFavoriteBtn.textContent = "Added to favorites";
  });
  zoomWindow.document.body.appendChild(addToFavoritesBtn);
});

// Add copyright text
const footer = document.querySelector("footer");
const copyrightText = document.createElement("p");
copyrightText.textContent = "Copyright © 2023";
footer.appendChild(copyrightText);
