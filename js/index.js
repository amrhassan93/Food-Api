import { searchBtn } from './elements.js';
import { searchInput } from './elements.js'
import { displaySearchResults } from './view/searchView.js';
import { SearchModel } from './model/searchModel.js';

import { respieDetailsModel } from './model/resipeDetailsModel.js';
import { displayRecipeDetails } from './view/recipeDetailsView.js'
let controlSearch = () => {
    let search = new SearchModel(`${searchInput.value}`);
    search.getSearchResults(displaySearchResults);
}

searchBtn.addEventListener('click', controlSearch)


let controlRecipe = () => {
    let recipeId = window.location.hash.replace('#', '');
    let recpieDetails = new respieDetailsModel(recipeId);
    recpieDetails.getRecipeDetails(displayRecipeDetails);

}
window.addEventListener('hashchange', controlRecipe)