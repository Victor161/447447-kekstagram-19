'use strict';

var MESSAGES = [
  'Всё отлично',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

var NAMES = ['Артём', 'Коля', 'Оля', 'Люба', 'Света', 'Максим'];

var getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var makeObjects = function (arrNames, arrMessages) {
  var photoItem = {};
  photoItem.url = 'photos/' + getRandomInt(1, 25) + '.jpg';
  photoItem.description = '';
  photoItem.likes = getRandomInt(15, 200);
  photoItem.comments = [];

  for (var i = 0; i < 2; i++) {
    var commentsObj = {};
    commentsObj.avatar = 'img/avatar-' + getRandomInt(1, 6) + '.svg';
    commentsObj.message = arrMessages[getRandomInt(0, arrMessages.length - 1)];
    commentsObj.name = arrNames[getRandomInt(0, arrNames.length - 1)];
    photoItem.comments[i] = commentsObj;
  }
  return photoItem;
}

var photoObj = makeObjects(NAMES, MESSAGES);

var makeArrOfObjects = function () {
    var arrOfObjects = [];

    for (var i = 0; i < 25; i++) {
        photoObj = makeObjects(NAMES, MESSAGES);
        arrOfObjects[i] = photoObj;
    }
    return arrOfObjects;
}

var bigArrOfOjects = makeArrOfObjects();

var pictureTemplate = document.querySelector('#picture')
    .content
    .querySelector('.picture');

var renderPicture = function(photoCard) {
    var pictureElement = pictureTemplate.cloneNode(true);

    pictureElement.querySelector('picture__img').src = photoCard.url;
    pictureElement.querySelector('picture__comments').textContent = photoCard.comments;
    pictureElement.querySelector('picture__likes').textContent = photoCard.likes;

    return pictureElement;
}

var fragment = document.createDocumentFragment();

for (var i = 0; i < bigArrOfOjects.length; i++) {
    fragment.appendChild(renderPicture(photoObj[i]));
}

var pictureList = document.querySelector('.picture');

pictureList.appendChild(fragment);







/*

var fragment = document.createDocumentFragment();

var picture = document.createElement('a');

var pictureImg = document.createElement('img');
pictureImg.classList.add('picture__img');

var like = document.createElement('span');
like.classList.add('picture__likes');

var comment = document.createElement('span');
comment.classList.add('picture__comments');

picture.src = photoObj.url;
like.textContent = photoObj.likes;
comment.textContent = photoObj.comments;

fragment.appendChild(pictureImg);
fragment.appendChild(comment);
fragment.appendChild(like);

*/





