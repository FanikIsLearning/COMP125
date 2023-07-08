"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-02

      Project to move images between a photo bucket and photo list.
      Author: 
      Date:   

      Filename: project05-02.js
*/

// Declare variables
var images = document.getElementsByTagName("img");
var photoBucket = document.getElementById("photo_bucket");
var photoList = document.getElementById("photo_list");

// Add onclick event handler to images
for (var i = 0; i < images.length; i++) {
  images[i].onclick = function() {
    if (this.parentNode.id === "photo_bucket") {
      // Create new list item and append image to it
      var newItem = document.createElement("li");
      newItem.appendChild(this);
      photoList.appendChild(newItem);
    } else {
      // Move image back to photo bucket
      var oldItem = this.parentNode;
      photoBucket.appendChild(this);
      oldItem.parentNode.removeChild(oldItem);
    }
  };
}
