const BASE_URL = 'https://callboard-backend.herokuapp.com/call/';

export default class FiltersApiService {
  constructor() {
    this.pageNum = 1;
  }

  async fetchFIlters() {
    try {
      const getFilters = await fetch(`${BASE_URL}categories`);
      const searchResult = await getFilters.json();

      return searchResult;
    } catch (error) {
      throw error;
    }
  }
  resetPage() {
    this.pageNum = 1;
  }

  async fetchCategories() {
    try {
      if (this.pageNum <= 4) {
        const getCategories = await fetch(`${BASE_URL}?page=${this.pageNum}`);

        this.pageNum += 1;
        return getCategories;
      }
    } catch (error) {
      throw error;
    }
  }
  async fetchCategory() {
    try {
      const getCategories = await fetch(`${BASE_URL}?page=${this.pageNum}`);

      return getCategories;
    } catch (error) {
      throw error;
    }
  }
}
