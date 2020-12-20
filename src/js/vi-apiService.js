
const BASE_URL = 'https://callboard-backend.herokuapp.com/call?';
const RUS_URL = 'https://callboard-backend.herokuapp.com/call/russian-categories'
const EN_URL = 'https://callboard-backend.herokuapp.com/call/categories'
import{fetchOnError} from './vi-getProductsGallery'




export default class GetProducts {
    constructor() {
        this.page = 1;
        this.request = '';
        this.categoryName = '';
    }
    fetchCategoryList() {
        const url = `${BASE_URL}page=${this.page}`;
        // const url = `${RUS_URL}`;
        // const url = `${EN_URL}`;
        return fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                return fetchOnError('error' + response.status)
            })
    };

    fetchCategoryContent() {
        const url = `${BASE_URL}/specific/${this.request}`;
        // const url = `${EN_URL}`;
        return fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                return fetchOnError('error' + response.status)
            });
        }

    set newRequest(request) {
        this.request = request;
}

    set pageNumber (newPage) {
        this.page = newPage;
    }


}

