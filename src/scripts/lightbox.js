import PhotoSwipeLightbox from 'photoswipe/lightbox';
import PhotoSwipe from 'photoswipe';
import 'photoswipe/style.css';

document.addEventListener('DOMContentLoaded', () => {
  // Get all artwork data
  const galleryDataItems = document.querySelectorAll('.pswp-gallery-data > div');
  const galleryDataArray = [...galleryDataItems].map(item => ({
    src: item.dataset.src,
    width: 1200, // We'll set a default width
    height: 1600, // And a default height for the aspect ratio
    alt: item.dataset.title,
    title: `${item.dataset.title}<br><em>${item.dataset.artist}</em>`,
  }));

  // Initialize PhotoSwipe
  const lightbox = new PhotoSwipeLightbox({
    gallery: '.gallery',
    children: '.art-card',
    showHideAnimationType: 'fade',
    pswpModule: PhotoSwipe,
    
    // UI options
    arrowPrev: true,
    arrowNext: true,
    counter: true,
    close: true,
    zoom: true,
    
    // Caption
    captionContent: item => {
      const title = item.data.title || '';
      return `<div class="pswp__caption"><div class="pswp__caption__title">${title}</div></div>`;
    }
  });

  // Modify click handler to use our data
  lightbox.on('itemData', (e) => {
    // Replace with data from our gallery data array
    const index = e.element.dataset.index;
    if (index !== undefined && galleryDataArray[index]) {
      Object.assign(e.itemData, galleryDataArray[index]);
    }
  });

  // Add custom UI for better artwork details
  lightbox.on('uiRegister', () => {
    lightbox.pswp.ui.registerElement({
      name: 'custom-caption',
      order: 9,
      isButton: false,
      appendTo: 'root',
      html: '',
      onInit: (el, pswp) => {
        pswp.on('change', () => {
          const currIndex = pswp.currIndex;
          const currItem = galleryDataArray[currIndex];
          if (currItem) {
            el.innerHTML = currItem.title;
          }
        });
      }
    });
  });

  // Load image dynamically when clicked to get real dimensions
  lightbox.on('beforeOpen', () => {
    lightbox.pswp.options.showHideAnimationType = 'zoom';
  });

  // Initialize
  lightbox.init();

  // Add click event to all art cards
  document.querySelectorAll('.art-card').forEach((card, index) => {
    card.addEventListener('click', (e) => {
      lightbox.loadAndOpen(index);
    });
  });
});