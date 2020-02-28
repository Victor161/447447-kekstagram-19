'use strict';

var MESSAGES = [
  'Всё отлично',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.'
];

var NAMES = ['Артём', 'Коля', 'Оля', 'Люба', 'Света', 'Максим'];

var getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

var makeObject = function (arrNames, arrMessages) {
  var photoItem = {};
  photoItem.url = 'photos/' + getRandomInt(1, 25) + '.jpg';
  photoItem.description = '';
  photoItem.likes = getRandomInt(15, 200);
  photoItem.comments = [];

  for (var i = 0; i < getRandomInt(1, 5); i++) {
    var commentsObj = {};
    commentsObj.avatar = 'img/avatar-' + getRandomInt(1, 6) + '.svg';
    commentsObj.message = arrMessages[getRandomInt(0, arrMessages.length - 1)];
    commentsObj.name = arrNames[getRandomInt(0, arrNames.length - 1)];
    photoItem.comments[i] = commentsObj;
  }
  return photoItem;
};

var makeArrOfObjects = function () {
  var arrOfObjects = [];

  for (var i = 0; i < 25; i++) {
    arrOfObjects[i] = makeObject(NAMES, MESSAGES);
  }
  return arrOfObjects;
};

var bigArrOfObjects = makeArrOfObjects();

var pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

var createPicture = function (photoCard) {
  var pictureElement = pictureTemplate.cloneNode(true);

  pictureElement.querySelector('.picture__img').src = photoCard.url;
  pictureElement.querySelector('.picture__comments').textContent = photoCard.comments.length;
  pictureElement.querySelector('.picture__likes').textContent = photoCard.likes;

  return pictureElement;
};

var fragment = document.createDocumentFragment();

for (var i = 0; i < bigArrOfObjects.length; i++) {
  fragment.appendChild(createPicture(bigArrOfObjects[i]));
}

var pictureList = document.querySelector('.pictures');

pictureList.appendChild(fragment);
