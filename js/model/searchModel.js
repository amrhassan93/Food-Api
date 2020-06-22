export class SearchModel {
    constructor(searchTerm) {
        this.query = searchTerm;
    }

    getSearchResults(callback) {
        let http = new XMLHttpRequest();
        http.open('get', `https://forkify-api.herokuapp.com/api/search?q=${this.query}`);
        http.send();

        http.addEventListener('readystatechange', function() {

            if (http.readyState == 4 && http.status == 200) {
                let recipes = JSON.parse(http.response).recipes;
                callback(recipes);
            }
        })
    }
}