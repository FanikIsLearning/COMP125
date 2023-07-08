"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Chapter Case

      Application to generate a slide show
      Author: Hoi Kit Fan
      Date:2023-03-03 

      Filename: js05.js
*/


window.addEventListener("load", createLightbox);

function createLightbox() {
  let lightBoxHoiKitFan = document.getElementById("lightbox");
  let lbTitleHoiKitFan = document.createElement("h1");
  let lbCounterHoiKitFan = document.createElement("div");
  let lbPrevHoiKitFan = document.createElement("div");
  let lbNextHoiKitFan = document.createElement("div");
  let lbImagesHoiKitFan = document.createElement("div");

  lightBoxHoiKitFan.appendChild(lbTitleHoiKitFan);
  lbTitleHoiKitFan.id = "lbTitle";
  lbTitleHoiKitFan.textContent = lightboxTitle;

  lightBoxHoiKitFan.appendChild(lbCounterHoiKitFan);
  lbCounterHoiKitFan.id = "lbCounter";
  let currentImg = 1;
  lbCounterHoiKitFan.textContent = currentImg + " / " + imgCount;

  lightBoxHoiKitFan.appendChild(lbPrevHoiKitFan);
  lbPrevHoiKitFan.id = "lbPrev";
  lbPrevHoiKitFan.innerHTML = "&#9664;";
  lbPrevHoiKitFan.onclick = showPrev;

  lightBoxHoiKitFan.appendChild(lbNextHoiKitFan);
  lbNextHoiKitFan.id = "lbNext";
  lbNextHoiKitFan.innerHTML = "&#9654;";
  lbNextHoiKitFan.onclick = showNext;

  lightBoxHoiKitFan.appendChild(lbImagesHoiKitFan);
  lbImagesHoiKitFan.id = "lbImages";

  for (let i = 0; i < imgCount; i++) {
    let imageHoiKitFan = document.createElement("img");
    imageHoiKitFan.src = imgFiles[i];
    imageHoiKitFan.alt = imgCaptions[i];
    imageHoiKitFan.onclick = createNewWindow;
    lbImagesHoiKitFan.appendChild(imageHoiKitFan);
  }

  function showNext() {
    lbImagesHoiKitFan.appendChild(lbImagesHoiKitFan.firstElementChild);
    (currentImg < imgCount) ? currentImg++ : currentImg = 1;
    lbCounterHoiKitFan.textContent = currentImg + " / " + imgCount;
  }

  function showPrev() {
    lbImagesHoiKitFan.insertBefore(lbImagesHoiKitFan.lastElementChild, lbImagesHoiKitFan.firstElementChild);
    (currentImg > 1) ? currentImg-- : currentImg = imgCount;
    lbCounterHoiKitFan.textContent = currentImg + " / " + imgCount;
  }

  let favoritesHoiKitFan = [];
  const maxFavoritesHoiKitFan = 5;

  function createNewWindow() {
    let createWindowHoiKitFan = window.open('', '_blank', 'width=500,height=500');

    let newImageHoiKitFan = document.createElement('img');
    newImageHoiKitFan.src = this.src;
    newImageHoiKitFan.alt = this.alt;

    let newCaptionHoiKitFan = document.createElement('figcaption');
    newCaptionHoiKitFan.textContent = this.alt;

    let newFigureHoiKitFan = document.createElement('figure');
    newFigureHoiKitFan.appendChild(newImageHoiKitFan);
    newFigureHoiKitFan.appendChild(newCaptionHoiKitFan);
    createWindowHoiKitFan.document.body.appendChild(newFigureHoiKitFan);

    let favoriteButtonHoiKitFan = document.createElement('div');
    favoriteButtonHoiKitFan.style.color = '#44433E';
    favoriteButtonHoiKitFan.style.borderStyle = 'solid';
    favoriteButtonHoiKitFan.style.padding = '10px';
    favoriteButtonHoiKitFan.style.borderRadius = '5px';
    favoriteButtonHoiKitFan.style.cursor = 'pointer';

    favoriteButtonHoiKitFan.addEventListener('mouseover', function () {
      favoriteButtonHoiKitFan.style.backgroundColor = '#D4DF37';
      favoriteButtonHoiKitFan.style.color = '#44433E';
    });

    favoriteButtonHoiKitFan.addEventListener('mouseout', function () {
      favoriteButtonHoiKitFan.style.backgroundColor = 'white';
      favoriteButtonHoiKitFan.style.color = '#44433E';
    });
    favoriteButtonHoiKitFan.textContent = 'Add to Favorites';
    let lineBreakHoiKitFan = document.createElement('br');
    favoriteButtonHoiKitFan.onclick = function () {

      let favoriteImgHoiKitFan = document.createElement('img');
      favoriteImgHoiKitFan.src = newImageHoiKitFan.src;
      favoriteImgHoiKitFan.alt = newCaptionHoiKitFan.textContent;

      if (favoritesHoiKitFan.includes(favoriteImgHoiKitFan.outerHTML)) {
        alert('This image is already in your favorites.');
        return;
      }

      if (favoritesHoiKitFan.length >= maxFavoritesHoiKitFan) {
        alert('Please remove one before adding another.');
        return;
      }

      favoritesHoiKitFan.push(favoriteImgHoiKitFan.outerHTML);
      displayFavorites();
    };
    createWindowHoiKitFan.document.body.appendChild(favoriteButtonHoiKitFan);
    createWindowHoiKitFan.document.body.appendChild(lineBreakHoiKitFan);

    let closeButtonHoiKitFan = document.createElement('div');
    closeButtonHoiKitFan.textContent = 'Close';
    closeButtonHoiKitFan.style.color = '#44433E';
    closeButtonHoiKitFan.style.borderStyle = 'solid';
    closeButtonHoiKitFan.style.padding = '10px';
    closeButtonHoiKitFan.style.borderRadius = '5px';
    closeButtonHoiKitFan.style.cursor = 'pointer';

    closeButtonHoiKitFan.addEventListener('mouseover', function () {
      closeButtonHoiKitFan.style.backgroundColor = '#D4DF37';
      closeButtonHoiKitFan.style.color = '#44433E';
    });

    closeButtonHoiKitFan.addEventListener('mouseout', function () {
      closeButtonHoiKitFan.style.backgroundColor = 'white';
      closeButtonHoiKitFan.style.color = '#44433E';
    });

    closeButtonHoiKitFan.onclick = function () {
      createWindowHoiKitFan.close();
    };
    createWindowHoiKitFan.document.body.appendChild(closeButtonHoiKitFan);
  }

  function displayFavorites() {
    let favoritesRegionHoiKitFan = document.getElementById("favoritesRegion");
    favoritesRegionHoiKitFan.innerHTML = "";

    for (let i = 0; i < favoritesHoiKitFan.length; i++) {
      let favoriteImgHoiKitFan = document.createElement("div")
      favoriteImgHoiKitFan.classList.add("grid-item");
      favoriteImgHoiKitFan.innerHTML = favoritesHoiKitFan[i];

      let brHoiKitFan = document.createElement("br");
      favoriteImgHoiKitFan.appendChild(brHoiKitFan);

      let removeButtonHoiKitFan = document.createElement("div");
      removeButtonHoiKitFan.innerText = "Remove";
      removeButtonHoiKitFan.style.display = 'none';
      removeButtonHoiKitFan.style.color = '#44433E';
      removeButtonHoiKitFan.style.background = 'white';
      removeButtonHoiKitFan.style.borderStyle = 'solid';
      removeButtonHoiKitFan.style.padding = '10px';
      removeButtonHoiKitFan.style.borderRadius = '5px';
      removeButtonHoiKitFan.style.cursor = 'pointer';

      removeButtonHoiKitFan.addEventListener('mouseover', function () {
        removeButtonHoiKitFan.style.backgroundColor = '#D4DF37';
        removeButtonHoiKitFan.style.color = '#44433E';
      });

      removeButtonHoiKitFan.addEventListener('mouseout', function () {
        removeButtonHoiKitFan.style.backgroundColor = 'white';
        removeButtonHoiKitFan.style.color = '#44433E';
      });

      removeButtonHoiKitFan.addEventListener("click", function () {
        favoritesHoiKitFan.splice(i, 1);
        displayFavorites();
      });

      favoriteImgHoiKitFan.addEventListener("click", function () {
        if (removeButtonHoiKitFan.style.display === 'none') {
          removeButtonHoiKitFan.style.display = 'block';
        } else {
          removeButtonHoiKitFan.style.display = 'none';
        }
      });

      favoriteImgHoiKitFan.appendChild(removeButtonHoiKitFan);
      favoritesRegionHoiKitFan.appendChild(favoriteImgHoiKitFan);
    }
  }
}


