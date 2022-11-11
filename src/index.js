import 'regenerator-runtime/runtime'

// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle'

// import styles bundle
import 'swiper/css/bundle'

// Test import of styles
import '@/styles/index.scss'

// import web components
import '@/elements/category-card'

// import api functions
import { getListCategories } from '@/api/categories'

// init Swiper:
const swiper = new Swiper('.categoriesSwiper', {
  slidesPerView: 7,
  spaceBetween: 16,
  breakpoints: {
    250: {
      slidesPerView: 1,
    },
    350: {
      slidesPerView: 2,
    },
    540: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 5,
    },
    1100: {
      slidesPerView: 6,
    },
    1280: {
      slidesPerView: 7,
    },
  },
  freeMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

const foodRecipes = document.querySelector('#foodRecipes .tw-grid')
foodRecipes.innerHTML = `<span class="tw-text-slate-200">Please choose a category food</span`

const swiperWrapper = document.querySelector('.categoriesSwiper .swiper-wrapper')
swiperWrapper.innerHTML = `<div role="status" class="tw-p-4 tw-max-w-xs tw-rounded tw-border tw-border-gray-700 tw-shadow tw-animate-pulse md:tw-p-6">
    <div class="tw-flex tw-justify-center tw-items-center tw-mb-4 tw-w-32 tw-h-28 tw-bg-gray-700 tw-rounded">
        <svg class="tw-w-12 tw-h-12 tw-text-gray-600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg>
    </div>
    <div class="tw-h-2.5 tw-bg-gray-700 tw-rounded-full tw-w-48 tw-mb-4"></div>
    <span class="tw-sr-only">Loading...</span>
</div>`
getListCategories()
  .then((listCategories) => {
    swiperWrapper.innerHTML = ``

    if (!listCategories) swiperWrapper.textContent = 'No data found'

    if (listCategories && listCategories.length) {
      for (let idxCatCard = 0; idxCatCard < listCategories.length; idxCatCard++) {
        const listCategory = listCategories[idxCatCard]
        const categoryCard = document.createElement('category-card')
        categoryCard.className = 'swiper-slide'
        categoryCard.setAttribute('selected', false)
        categoryCard.setAttribute('category', JSON.stringify(listCategory))
        swiperWrapper.appendChild(categoryCard)
      }
    }
  })
  .catch(() => {
    swiperWrapper.textContent = 'Error...'
  })
