/**
 * Created by annaburley on 02/11/2016.
 */
'use strict';

module.exports = function(url, callback, __JSONPCallBackImages) {

  if (!__JSONPCallBackImages) {
    __JSONPCallBackImages = 'cb' + Date.now();
  }
  window[__JSONPCallBackImages] = function(data) {
    callback(data);
  };

  var script = document.createElement('script');
  script.src = url + '?callback=' + __JSONPCallBackImages;
  document.body.appendChild(script);
};
//loadImageList(pictures, initialiseImages, '__JSONPCallBackImages');

//loadImageList;
