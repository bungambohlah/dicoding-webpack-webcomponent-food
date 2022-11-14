class RecipeCard extends HTMLElement {
  // first, observe the attributes
  static get observedAttributes() {
    return ['recipe', 'category']
  }

  constructor() {
    // Always call super first in constructor
    super()
  }

  // lifecycle web components
  connectedCallback() {
    let data = null
    if (this.hasAttribute('recipe')) data = JSON.parse(this.recipe)

    if (!data) this.innerHTML = ``
    else if (data) {
      this.innerHTML = `<article
          class="recipes-card cart-type-argon tw-h-full tw-transform tw-overflow-hidden tw-rounded tw-bg-gray-800 tw-shadow-md tw-shadow-fuchsia-900 tw-transition-all tw-duration-200 hover:-tw-translate-y-0.5 hover:tw-shadow-lg hover:tw-shadow-fuchsia-800"
          role="button">
          <div class="tw-relative tw-flex tw-items-center tw-justify-center tw-w-auto tw-h-48 sm:tw-h-52">
            <span class="tw-sr-only">Recipe Image</span>
            <span
              class="tw-box-border tw-block tw-overflow-hidden tw-bg-white tw-opacity-100 tw-border-0 tw-m-0 tw-p-0 tw-absolute tw-inset-0">
                <img
                  alt="${data.strMeal}"
                  src="${data.strMealThumb}"
                  decoding="async"
                  class="recipes-image tw-absolute tw-inset-0 tw-box-border tw-p-0 tw-border-none tw-m-auto tw-block tw-w-0 tw-h-0 tw-min-w-full tw-max-w-full tw-min-h-full tw-max-h-full tw-object-cover"
                  sizes="100vw" />
              </span>
            <div
              class="tw-absolute tw-top-2 tw-left-3 tw-rounded tw-bg-fuchsia-600 tw-px-1.5 tw-text-xs tw-font-semibold tw-leading-6 tw-text-light ltr:tw-left-3 rtl:tw-right-3 sm:tw-px-2 md:tw-top-[22px] md:tw-px-2.5 ltr:md:tw-left-4 rtl:md:tw-right-4">${this.category}</div>
          </div>
          <header class="tw-p-3 md:tw-p-6">
            <h3 class="tw-text-xs tw-text-body md:tw-text-sm">${data.strMeal}</h3>
          </header>
        </article>`
    }
  }
  disconnectedCallback() {}
  attributeChangedCallback() {}

  /**
   * @param {String} recipe
   */
  set recipe(recipe) {
    this.setAttribute('recipe', recipe)
  }

  get recipe() {
    return this.getAttribute('recipe')
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

window.customElements.define('recipe-card', RecipeCard)
