const BASE_URL = 'https://callboard-backend.herokuapp.com/call';

export const getDataSearch = async (query) => {
    try {
          return await fetch(`${BASE_URL}/find?search=${query}`).then( res => res.json())
          .then( res => res)       
    } catch (e) {
        console.log(e)
    }
}

export const getDataCategory = async (query) => {
    try {
        return await fetch(`${BASE_URL}/specific/${query}`)
            .then( res => res.json())
            .then( res => res)
    } catch (e) {
        console.log(e)
    }
}