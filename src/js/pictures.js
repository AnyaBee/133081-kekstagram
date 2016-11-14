/**
 * Created by annaburley on 27/10/2016.
 */
'use strict';
var loadImageList = require('./load');
var renderPictureBlock = require('./picture');
var Gallery = require('./gallery');

module.exports = function() {

  var container = document.querySelector('.pictures');
  var pictures = 'http://localhost:1507/api/pictures';

  var initialiseImages = function(images) {
    images.forEach(function(picture) {
      container.appendChild(renderPictureBlock(picture));
      document.querySelector('.filters').classList.remove('hidden');
    });
    Gallery.setPictures();
  };

  loadImageList(pictures, initialiseImages, '__JSONPCallBackImages');
}();





