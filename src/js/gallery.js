'use strict';

module.exports = function() {
  var Gallery = function () {
    this.pictures = [];
    this.activePicture = null;
    this.overlay = document.querySelector('gallery-overlay');
    this.overlayClose = document.querySelector('gallery-overlay-close');
    this.overlayImage = document.querySelector('gallery-overlay-image');
  };
  Gallery.prototype.setPictures = function (pictures) {
    this.pictures = pictures;
  };
  Gallery.prototype.show = function (number) {
    var self = this;
    this.overlayClose.onclick = function () {
      self.hide();
    };

    this.overlayImage.onclick = function (evt) {
      if (evt.target === self.overlayImage) {
        if (self.activePicture == self.pictures.length - 1) {
          self.setActivePicture(0);
        }
        self.setActivePicture(self.activePicture + 1);
      }
    };
    this.overlay.classList.remove('invisible');
    this.setActivePicture(number);
  };

  Gallery.prototype.hide = function () {
    this.overlay.classList.add('invisible');
  };

  Gallery.prototype.setActivePicture = function (number) {
    var self = this;
    this.activePicture = number;
    this.pictures.forEach(function (image, i) {
      if (i === number) {
        self.overlayImage.setAttribute('src',);
        document.querySelector('.likes-count').innerHTML = image.likes;
        document.querySelector('.comments-count').innerHTML = image.comments;
      }
    });
  };
}();
