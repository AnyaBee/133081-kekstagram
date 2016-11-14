'use strict';

var Gallery = function() {
  this.pictures = [];
  this.activePicture = 0;
  this.overlay = document.querySelector('.gallery-overlay');
  this.overlayClose = document.querySelector('.gallery-overlay-close');
  this.overlayImage = document.querySelector('.gallery-overlay-image');
};
Gallery.prototype.setPictures = function(pictures) {
  this.pictures = pictures;
};

Gallery.prototype.show = function(number) {
  var self = this;
  this.overlayClose.onclick = function() {
    self.hide();
  };

  this.overlayImage.onclick = function(evt) {
    if (evt.target === self.overlayImage) {
      if (self.activePicture === self.pictures.length - 1) {
        self.setActivePicture(0);
      }
      self.setActivePicture(self.activePicture + 1);
    }
  };
  self.overlay.classList.remove('invisible');
  self.setActivePicture(number);
};

Gallery.prototype.hide = function() {
  this.overlay.classList.add('invisible');
};

Gallery.prototype.setActivePicture = function(number) {
  this.activePicture = number;
  var largeImage = this.pictures[number];
  this.overlayImage.src = largeImage.url;
  document.querySelector('.likes-count').innerHTML = largeImage.likes;
  document.querySelector('.comments-count').innerHTML = largeImage.comments;
};

module.exports = new Gallery();
