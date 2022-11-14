import '@/styles/categoryCard.scss'
import { getRecipesByCategory } from '@/api/recipes'

// import web components
import '@/elements/recipe-card'

class CategoryCard extends HTMLElement {
  // first, observe the attributes
  static get observedAttributes() {
    return ['selected', 'category']
  }

  constructor() {
    // Always call super first in constructor
    super()
  }

  // lifecycle web components
  connectedCallback() {
    this.addEventListener('click', () =>
      this.setAttribute('selected', this.selected === 'true' ? 'false' : 'true')
    )

    let data = null
    if (!this.hasAttribute('selected')) this.setAttribute('selected', null)
    if (this.hasAttribute('category')) data = JSON.parse(this.category)

    if (!data) {
      this.innerHTML = ``
    } else if (data) {
      this.innerHTML = `<div
              class="tw-cursor-pointer tw-rounded-lg tw-shadow-lg tw-shadow-violet-700 tw-border tw-max-w-[170px] tw-max-h-[188px] tw-bg-gray-800 tw-border-gray-700">
              <div class="tw-bg-white tw-p-2">
                  <img class="tw-w-[166px] tw-h-[128px] tw-m-auto tw-rounded-t-lg tw-object-contain"
                    src="${data.strCategoryThumb}" alt="Category 1" />
              </div>
              <div class="tw-p-2">
                  <h5 class="tw-text-sm tw-font-medium tw-tracking-tight tw-text-white tw-text-center">${data.strCategory}</h5>
              </div>
            </div>`
    }
  }
  disconnectedCallback() {}
  attributeChangedCallback() {
    if (this.selected) {
      const categoryCards = document.querySelectorAll('.category-selected')
      for (let i = 0; i < categoryCards.length; ++i) {
        categoryCards[i].classList.remove('category-selected')
        categoryCards[i].setAttribute('selected', 'false')
      }

      if (this.selected === 'true') {
        this.classList.add('category-selected')

        let data = null
        if (this.hasAttribute('category')) data = JSON.parse(this.category)
        // get food recipes by selected category
        if (data && data.strCategory) {
          const foodRecipes = document.querySelector('#foodRecipes .tw-grid')
          foodRecipes.innerHTML = ``

          getRecipesByCategory(data.strCategory)
            .then((listRecipes) => {
              if (!listRecipes) foodRecipes.textContent = 'No data found'

              if (listRecipes && listRecipes.length) {
                for (let idxRcpCard = 0; idxRcpCard < listRecipes.length; idxRcpCard++) {
                  const listRecipe = listRecipes[idxRcpCard]
                  const recipeCard = document.createElement('recipe-card')
                  recipeCard.setAttribute('recipe', JSON.stringify(listRecipe))
                  recipeCard.setAttribute('category', data.strCategory)
                  foodRecipes.appendChild(recipeCard)
                }
              }
            })
            .catch(() => {
              foodRecipes.textContent = 'Error...'
            })
        }
      }
    }
  }

  /**
   * @param {String} selected
   */
  set selected(selected) {
    this.setAttribute('selected', selected)
  }

  get selected() {
    return this.getAttribute('selected')
  }

  /**
   * @param {String} category
   */
  set category(category) {
    this.setAttribute('category', category)
  }

  get category() {
    return this.getAttribute('category')
  }
}

window.customElements.define('category-card', CategoryCard)
