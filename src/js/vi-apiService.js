
// const BASE_URL = 'https://callboard-backend.herokuapp.com/call/categories';
const BASE_URL =  'https://callboard-backend.herokuapp.com/call?';

// const API_KEY = '19172915-1886b55ac07c270b02db4da6f';
//  должен еще быть импорт алертов из нотифай


export default class GetProduct {
    constructor() {
        // this.searchQuery = '';
        this.page = 1;
        // this.key = API_KEY
        // this.perpage = perpage;
    }
    

    fetchProduct() {
        const url = `${BASE_URL}page=${this.page}`;

        return fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
                            }
           return fetchOnError('error'+ response.status)
        })
        
    };

    set pageNumber (newPage) {
        this.page = newPage;
    }
    
    pageReset() {
        return this.page = 1
    };


    set query(newQuery) {
        this.searchQuery = newQuery;
    };

    get query() {
       return this.searchQuery
    }

}
