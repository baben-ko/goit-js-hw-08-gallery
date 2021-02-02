import items from './gallery-items.js';


// парсинг галерей в html

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
imgRef.setAttribute('data-index', `${item.index}`);
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


galleryUlRef.append(...galleryCards);

// end - парсинг галерей в html

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
  lightboxImage.dataset.index = tagBtn.dataset.index;
  
  
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



// закрытие модалки по Esc 

  

window.addEventListener('keydown', event => {
     
    const activeIndex = Number(lightboxImage.dataset.index);
    const itemsLength = items.length;


    if(event.key === 'ArrowLeft') {


        if(activeIndex > 0) {
        console.log('листаем влево');
        const previousImgSourse = items[activeIndex - 1].original;
        lightboxImage.src = previousImgSourse;
        lightboxImage.dataset.index = activeIndex - 1;
    }
     else {

        console.log('это первая картинка в галереи, хватит клацать влево');
     }  
               
    }

    if(event.key === 'ArrowRight') {


        if(activeIndex < items.length - 1) {
        console.log('листаем вправо');
        console.log(items.length);
        const nextImgSourse = items[activeIndex + 1].original;
        lightboxImage.src = nextImgSourse;
        lightboxImage.dataset.index = activeIndex + 1;
        }

        else {
            console.log('это последняя картинка в галереи, хватит клацать вправо');
         }  
    }

    if(event.key === 'Escape') {
        lightboxRef.classList.remove('is-open');
        lightboxImage.src = '';
    }
});



