// fetch library/framework
import axios from 'axios'

async function getListCategories() {
  try {
    const categoryFetch = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
    if (categoryFetch.data && categoryFetch.data.categories) return categoryFetch.data.categories
    return null
  } catch (error) {
    // console.error('got error from API', error)
    alert('Something error, please reload')
    return Promise.reject(error)
  }
}

export { getListCategories }
