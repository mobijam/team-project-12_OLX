const BASE_URL = 'https://callboard-backend.herokuapp.com';
const endPoint = '/call/find?search=';


export default class API {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }
  
  async fetchData() {

    try {
      const getData = await fetch(`${BASE_URL}${endPoint}${this.query}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
      });
      const getResult = await getData.json();
      return getResult;
    }

    catch (error) {
      throw error;
    }
  }

  resetPage() {
    this.page = 1;
  }
    
  get query() {
    return this.searchQuery;
  }

  set query(value) {
    this.searchQuery = value;
  }
}

