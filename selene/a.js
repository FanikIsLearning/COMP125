// Variables and Initialization
var imageData = [];
var currentImageIndex = 0;
var imageTimeout;
var image = document.getElementById("image");
var caption = document.getElementById("caption");
var $infoOverlay = $("#info-overlay");
var $infoFilename = $("#info-filename");
var $infoDuration = $("#info-duration");
var xhr = new XMLHttpRequest();

// Load image data from text file using AJAX
function loadImageData() {
  xhr.open("GET", "data.txt");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      imageData = JSON.parse(xhr.responseText);
      displayImage(currentImageIndex);
    }
  };
  xhr.send();
}

// Display image with fade-in/fade-out effect and set timeout for next image
function displayImage(index) {
  clearTimeout(imageTimeout);
  var data = imageData[index];
  var imagePath = "images/" + data.filename;
  image.src = imagePath;
  caption.textContent = data.filename;
  image.style.opacity = 0;
  $(image).animate({ opacity: 1 }, 1000);
  imageTimeout = setTimeout(function () {
    currentImageIndex++;
    if (currentImageIndex >= imageData.length) {
      currentImageIndex = 0;
    }
    displayImage(currentImageIndex);
  }, data.duration);
}

// Update image data and display first image
$("#update").click(function () {
  loadImageData();
});

// Display info overlay on image click and hide on close button click
$("#image").click(function () {
  var data = imageData[currentImageIndex];
  $infoFilename.text(data.filename);
  $infoDuration.text(data.duration + " milliseconds");
  $infoOverlay.show();
});
$("#close-info").click(function () {
  $infoOverlay.hide();
});

// Navigate through images with previous and next buttons
$("#previous").click(function () {
  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = imageData.length - 1;
  }
  displayImage(currentImageIndex);
});
$("#next").click(function () {
  currentImageIndex++;
  if (currentImageIndex >= imageData.length) {
    currentImageIndex = 0;
  }
  displayImage(currentImageIndex);
});

// Initialize gallery
loadImageData();
