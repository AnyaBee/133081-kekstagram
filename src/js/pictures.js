/**
 * Created by annaburley on 27/10/2016.
 */
'use strict';

var loadImageList = require('./load');
var initialiseImages = require('./picture');
module.exports = function() {

  document.querySelector('.filters').classList.add('hidden');
  var template = document.querySelector('template');
  var templateContainer = 'content' in template ? template.content : template;
  var imageTemplate = templateContainer.querySelector('.picture');

  var loadImages = function(picture) {
    var imageElement = imageTemplate.cloneNode(true);
    imageElement.querySelector('.picture-likes').textContent = picture.likes;
    imageElement.querySelector('.picture-comments').textContent = picture.comments;
    imageElement.href = picture.url;
    var image = new Image(182, 182);
    image.onload = function () {
      imageElement.querySelector('img').src = image.src;
    };

    image.onerror = function() {
      imageElement.classList.add('picture-load-failure');
    };
    image.src = picture.url;
    return imageElement;
  };
  /*
   var initialiseImages = function(images) {
   images.forEach(function(picture) {
   container.appendChild(loadImages(picture));
   document.querySelector('.filters').classList.remove('hidden');
   });
   };
   */
  //loadImageList(pictures, initialiseImages, '__JSONPCallBackImages');
}();

/*loadImageList('http://localhost:1507/api/pictures', function(images)) {
 images.forEach(loadImages)};
 */
