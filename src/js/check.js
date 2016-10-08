/**
 * Created by annaburley on 08/10/2016.
 */
function getMessage(a,b){
  if (typeof a === 'boolean'){
    if (a) {
      var pictureReturn = "Переданное GIF-изображение анимировано и содержит " + b + " кадров";
    } else {
      var pictureReturn = "Переданное GIF-изображение не анимировано";
    }
  } else if (typeof a === 'number'){
    var pictureReturn = "Переданное SVG-изображение содержит " + a + " объектов и " + (b * 4) + " атрибутов";
  } else if (Array.isArray(a)) {
    var amountOfRedPoints = 0;
    for (var i = 0; i < a.length; i++) {
      amountOfRedPoints += a[i];
    }
    var pictureReturn =  "Количество красных точек во всех строчках изображения: " + amountOfRedPoints;
  } else if (Array.isArray(a) && Array.isArray(b)){
    var artifactsSquare = 0;
    for(i = 0; i < a.length; i++){
      artifactsSquare += (a[i] * b[i]);
    }
    var pictureReturn =  "Общая площадь артефактов сжатия: " + artifactsSquare +  "пикселей";
  } else {
    var pictureReturn = "Переданы некорректные данные";
  }
  return pictureReturn;
}
""


