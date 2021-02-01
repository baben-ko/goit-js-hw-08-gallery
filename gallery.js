import items from './gallery-items.js';



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
const lightboxRef = document.querySelector('.js-lightbox');
const lightboxImage = document.querySelector('.lightbox__image');
const lightboxOverlayRef = document.querySelector('.lightbox__overlay');
// const imgRef = document.querySelector('.gallery__image');

galleryUlRef.append(...galleryCards);

// -----------------------------

galleryUlRef.addEventListener('click', onClick);

function onClick(event) {

    event.preventDefault();

    const tagBtn = event.target;

   if(tagBtn.nodeName !== 'IMG'){
       console.log('клик не по картинке!!!');
       return;  
   }

  lightboxRef.classList.add('is-open');

  lightboxImage.src = tagBtn.dataset.source;  

//   console.log(object);
   
}

    // закрытие модалки по Х

const closeModalBtn = document.querySelector('button[data-action="close-lightbox"]')

closeModalBtn.addEventListener('click', () => {

    lightboxRef.classList.remove('is-open');
    lightboxImage.src = '';
});

// закрытие модалки по бекдропу

lightboxOverlayRef.addEventListener('click', event => {

    if(event.target === event.currentTarget) {

        lightboxRef.classList.remove('is-open');
        lightboxImage.src = '';

    }

});


