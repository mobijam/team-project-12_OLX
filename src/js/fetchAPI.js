const BASE_URL = 'https://callboard-backend.herokuapp.com';

export default class FiltersApiService {
  constructor() {
    this.searchQuery = '';
    this.pageNum = 1;
    this.category = '';
    this.endPoint = {
      reg: '/auth/register',
      login: '/auth/login',
      logout: '/auth/logout',
      refresh: '/auth/refresh',
      google: '/auth/google',
      user: '/user',
      call: '/call',
      fave: '/call/favourite',
      userFave: '/call/favourites',
      userCall: '/call/own',
      find: '/call/find?search=',
      cat: '/call/categories',
      specCat: '/call/specific/',     
    };
  }

  get query() {
    return this.searchQuery;
  }

  set query(value) {
    this.searchQuery = value;
  }

  async fetchSearch() {
    try {
      const getData = await fetch(`${BASE_URL}${this.endPoint.find}${this.query}`, {
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
    this.pageNum = 1;
  }
  
  async fetchFIlters() {
    try {
      const getFilters = await fetch(`${BASE_URL}${this.endPoint.cat}`);
      const searchResult = await getFilters.json();

      return searchResult;
    } catch (error) {
      throw error;
    }
  }
  

  async fetchCategories() {
    try {
      if (this.pageNum <= 5) {
        this.pageNum += 1;
        const getCategories = await fetch(`${BASE_URL}${this.endPoint.call}?page=${this.pageNum}`);
        return getCategories;
      }
    } catch (error) {
      throw error;
    }
  }
  
  async fetchCategory() {
    try {
      const getCategories = await fetch(`${BASE_URL}${this.endPoint.specCat}${this.category}`);

      return getCategories;
    } catch (error) {
      throw error;
    }
  }
}
