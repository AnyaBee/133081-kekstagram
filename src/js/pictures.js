/**
 * Created by annaburley on 27/10/2016.
 */
'use strict';

var loadImageList = require('./load');
var Picture = require('./picture');
var galleryObject = require('./gallery');

var container = document.querySelector('.pictures');
var footer = document.querySelector('footer');
var filters = document.querySelector('.filters');
var activeFilter = 'all';
var pageSize = 12;
var pageNumber = 0;
var THROTTLE_TIMEOUT = 100;

var initialiseImages = function(images) {
  images.forEach(function(picture, index) {
    var pictureBlock = new Picture(picture, index);
    container.appendChild(pictureBlock.element);
    document.querySelector('.filters').classList.remove('hidden');
  });

  galleryObject.setPictures(images);
};

var lastCall = Date.now();
window.addEventListener('scroll', function() {
  if(Date.now() - lastCall >= THROTTLE_TIMEOUT) {
    if(footer.getBoundingClientRect().bottom - window.innerHeight <= THROTTLE_TIMEOUT) {
      loadImages(activeFilter, ++pageNumber);
    }
    lastCall = Date.now();
  }
});

var loadImages = function(filter, currentPageNumber) {
  loadImageList('/api/pictures', {
    from: currentPageNumber * pageSize,
    to: currentPageNumber * pageSize + pageSize,
    filter: filter
  }, initialiseImages);
};

var changeFilter = function(filterID) {
  container.innerHTML = '';
  activeFilter = filterID;
  pageNumber = 0;
  loadImages(filterID, pageNumber);
};

filters.addEventListener('change', function(evt) {
  if(evt.target.classList.contains('filters-radio')) {
    changeFilter(evt.target.id);
  }
}, true);

//loadImageList(pictures, initialiseImages, '__JSONPCallBackImages'); }();
module.exports = loadImages;



