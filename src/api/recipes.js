// fetch library/framework
import axios from 'axios'

async function getRecipesByCategory(category = 'Seafood') {
  try {
    const mealFetch = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
    )
    if (mealFetch.data && mealFetch.data.meals) return mealFetch.data.meals
    return null
  } catch (error) {
    // console.error('got error from API', error)
    alert('Something error, please reload')
    return Promise.reject(error)
  }
}

export { getRecipesByCategory }
