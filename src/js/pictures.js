/**
 * Created by annaburley on 27/10/2016.
 */
'use strict';

var loadImageList = require('./load');
var initialiseImages = require('./picture');

module.exports = function(images) {
  var container = document.querySelector('.pictures');
  var pictures = 'http://localhost:1507/api/pictures';
  images.forEach(function(picture) {
    container.appendChild(loadImages(picture));
    document.querySelector('.filters').classList.remove('hidden');
  });
};

//initialiseImages;


