import { searchResultContainer } from '../elements.js';


export function displaySearchResults(recipes) {

    let markUp = ``;
    for (let i = 0; i < recipes.length; i++) {
        markUp += `
            <div class="media py-3">
          
            <img src="${recipes[i].image_url}" class="align-self-center rounded-circle mr-3" alt="...">
            <div class="media-body">
            <a href="#${recipes[i].recipe_id}">
                <h6 class="mt-0">${recipes[i].title}</h6>
                <p> by <span>${recipes[i].publisher}</span></p>
                </a>
                <a href="${recipes[i].source_url}" target=_blank>see more</a>
                
            </div>
        </div>
            `;
    }

    searchResultContainer.innerHTML = markUp;
}