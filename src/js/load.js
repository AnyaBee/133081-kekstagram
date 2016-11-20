/**
 * Created by annaburley on 02/11/2016.
 */
'use strict';

var loadImageList = function(url, params, callback) {
  var xhr = new XMLHttpRequest();

  xhr.onload = function(evt) {
    var loadedData = JSON.parse(evt.target.response);
    callback(loadedData);
  };

  xhr.open('GET', url + '?' + 'from=' + params.from + '&to=' + params.to + '&filter=' + params.filter);
  xhr.send();
};

module.exports = loadImageList;
