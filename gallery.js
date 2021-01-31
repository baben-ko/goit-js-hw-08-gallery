import items from './gallery-items.js';

// console.table(items);

const createGalleryMarkup = item => {

const liRef = document.createElement('li');
liRef.classList.add('gallery__item');

const aRef = document.createElement('a');
aRef.classList.add('gallery__link');
aRef.setAttribute('href', `${item.original}`);

const imgRef = document.createElement('img');
imgRef.classList.add('gallery__image');
imgRef.setAttribute('src', `${item.preview}`);
imgRef.setAttribute('data-source', `${item.original}`);
imgRef.setAttribute('alt', `${item.description}`); 

liRef.appendChild(aRef);
aRef.appendChild(imgRef);

return liRef;
};

const galleryCards = items.map(item => createGalleryMarkup(item));

const galleryUlRef = document.querySelector('.js-gallery');

galleryUlRef.append(...galleryCards);



