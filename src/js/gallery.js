'use strict';
module.exports = function() {
  var Gallery = function() {
    var self = this;
    this.pictures = [];
    this.activePicture = 0;
    this.overlay = document.querySelector('gallery-overlay');
    this.overlayClose = document.querySelector('gallery-overlay-close');
    this.overlayImage = document.querySelector('gallery-overlay-image');

    Gallery.prototype.setPictures = function(pictures) {
      self.pictures = pictures;
    };

    Gallery.prototype.show = function(number) {
      self.overlayClose.onclick = function() {
        self.hide();
      };

      self.overlayImage.onclick = function(evt) {
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
      self.overlay.classList.add('invisible');
    };

    Gallery.prototype.setActivePicture = function(number) {
      self.activePicture = number;
      var largeImage = self.pictures[number];
      self.overlayImage.src = largeImage.url;
      document.querySelector('.likes-count').innerHTML = largeImage.likes;
      document.querySelector('.comments-count').innerHTML = largeImage.comments;
    };

  };
  return new Gallery();
};
