$(document).ready(function () {
  let imageDataHoiKitFan = [];
  let currentImageIndexHoiKitFan = 0;
  let imageTimeoutHoiKitFan;

  //using AJAX and the javascript with XMLHttpRequest Class and JSON of TEXT file.
  function loadImageData() {
    const xhrHoiKitFan = new XMLHttpRequest();
    xhrHoiKitFan.open("GET", "image_data.txt", true);
    xhrHoiKitFan.onload = function () {
      if (this.status === 200) {
        imageDataHoiKitFan = JSON.parse(this.responseText);
        displayImage(0);
      }
    };
    xhrHoiKitFan.send();
  }

  // Display an image by index and set a timeout for the next image
  function displayImage(index) {
    clearTimeout(imageTimeoutHoiKitFan);
    currentImageIndexHoiKitFan = index;
    const imageInfoHoiKitFan = imageDataHoiKitFan[index];
    const imgHoiKitFan = $("#gallery img");
    imgHoiKitFan.fadeOut(400, function () {
      imgHoiKitFan.attr("src", "images/" + imageInfoHoiKitFan.filename);
      imgHoiKitFan.fadeIn(400);

      $(".image-info").text(
        "Filename: " +
          imageInfoHoiKitFan.filename +
          ", Duration: " +
          imageInfoHoiKitFan.duration +
          " ms"
      );
    });

    imageTimeoutHoiKitFan = setTimeout(function () {
      displayImage(
        (currentImageIndexHoiKitFan + 1) % imageDataHoiKitFan.length
      );
    }, imageInfoHoiKitFan.duration);
  }

  //Event handlers
  $("#previous").on("click", function () {
    displayImage(
      (currentImageIndexHoiKitFan - 1 + imageDataHoiKitFan.length) %
        imageDataHoiKitFan.length
    );
  });

  $("#next").on("click", function () {
    displayImage((currentImageIndexHoiKitFan + 1) % imageDataHoiKitFan.length);
  });

  $("#update").on("click", function () {
    loadImageData();
  });

  $("#gallery img").on("click", function () {
    const imageInfoHoiKitFan = imageDataHoiKitFan[currentImageIndexHoiKitFan];
    $("#info-image").attr("src", "images/" + imageInfoHoiKitFan.filename);
    $("#image-info").text(
      "Filename: " +
        imageInfoHoiKitFan.filename +
        ", Duration: " +
        imageInfoHoiKitFan.duration +
        " ms"
    );
    $("#info-mode").fadeIn(400);
  });

  $("#gallery").ready(
    function () {
      $(".image-info").fadeIn(300);
    },
    function () {
      $(".image-info").fadeOut(300);
    }
  );

  $("#close").on("click", function () {
    $("#info-mode").fadeOut(400);
  });

  //Initialize
  loadImageData();
});
