/**
 * Created by annaburley on 02/11/2016.
 */
'use strict';

var galleryObject = require('./gallery');

//вызывает показ фотогалереи
var Picture = function(img, index) {
  this.img = img;
  this.element = this.renderPictureBlock(this.img);
  this.element.onclick = function(evt) {
    evt.preventDefault();
    galleryObject.show(index);
  };
};

Picture.prototype.remove = function() {
  this.element.onclick = null;
};

Picture.prototype.renderPictureBlock = function(picture) {
  document.querySelector('.filters').classList.add('hidden');
  var template = document.querySelector('template');
  var templateContainer = 'content' in template ? template.content : template;
  var imageTemplate = templateContainer.querySelector('.picture');
  var imageElement = imageTemplate.cloneNode(true);
  imageElement.querySelector('.picture-likes').textContent = picture.likes;
  imageElement.querySelector('.picture-comments').textContent = picture.comments;
  imageElement.href = picture.url;
  var image = new Image(182, 182);
  image.onload = function() {
    imageElement.querySelector('img').src = image.src;
  };
  image.onerror = function() {
    imageElement.classList.add('picture-load-failure');
  };
  image.src = picture.url;
  return imageElement;
};

module.exports = Picture;

