import 'regenerator-runtime/runtime'

// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle'

// import styles bundle
import 'swiper/css/bundle'

// Test import of styles
import '@/styles/index.scss'

// import web components
import '@/elements/category-card'

// fetch library/framework
import axios from 'axios'

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

async function getListCategories() {
  try {
    const categories = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
    if (categories.data && categories.data.categories) return categories.data.categories
    return null
  } catch (error) {
    console.error('got error from API', error)
    alert('Something error, please reload')
  }
}

const swiperWrapper = document.querySelector('.categoriesSwiper .swiper-wrapper')
getListCategories()
  .then((listCategories) => {
    if (!listCategories) swiperWrapper.textContent = 'No data found'

    if (listCategories) {
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
