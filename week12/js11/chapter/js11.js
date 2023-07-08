"use strict";
/*
   JavaScript 7th Edition
   Chapter 11
   Chapter Case

   Author:   
   Date:     

   Filename: js11.js


*/

window.addEventListener("load", init);

function init() {
  // Page Objects
  let stories = document.getElementById("stories");
  let news = document.getElementById("news");
  let sInput = document.getElementById("sInput");
  let sButton = document.getElementById("sButton");
  let suggestBox = document.getElementById("suggestBox");

  /*fetch("commentary.html")
    .then((response) => {
      if (response.ok === true) {
        return response.text();
      } else {
        return "error!";
      }
    })
    .then((text) => {
      stories.innerHTML = text;
    })
    .catch((response) => {
      console.log(error);
    });*/

  const xhr = new XMLHttpRequest();
  // Open the request and send it
  xhr.open("get", "commentary.html");
  xhr.send(null);

  // Handle the changing request state
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status >= 200 && xhr.status < 300) {
        // Manage the response
        stories.innerHTML = xhr.responseText;
      } else {
        console.log("Request failed: " + xhr.statusText);
      }
    }
  };

  // Fetch current headlines from the web server
  fetch("headlines.xml")
    .then((response) => response.text())
    .then((str) => new DOMParser().parseFromString(str, "text/xml"))
    .then((dom) => {
      let items = dom.querySelectorAll("item");
      // Loop through each story item
      for (let story of items) {
        // Write the story content and append it to the page
        let headline = story.children[0].textContent;
        let link = story.children[1].textContent;
        let summary = story.children[2].textContent;
        let htmlCode = `<article><h2><a href="${link}">${headline}</a></h2>
<p>${summary}</p></article>`;
        news.insertAdjacentHTML("beforeend", htmlCode);
      }
    });
}
