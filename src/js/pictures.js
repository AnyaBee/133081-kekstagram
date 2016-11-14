/**
 * Created by annaburley on 27/10/2016.
 */
'use strict';
var loadImageList = require('./load');
var Picture = require('./picture');
var galleryObject = require('./gallery');

module.exports = function() {

  var container = document.querySelector('.pictures');
  var pictures = 'http://localhost:1507/api/pictures';

  var initialiseImages = function(images) {
    images.forEach(function(picture, index) {
      var pictureBlock = new Picture(picture, index);
      container.appendChild(pictureBlock.element);
      document.querySelector('.filters').classList.remove('hidden');
    });

    galleryObject.setPictures(images);
  };

  loadImageList(pictures, initialiseImages, '__JSONPCallBackImages');
}();





