const BASE_URL = 'https://callboard-backend.herokuapp.com/auth/register';

const user = {
  email: 'cj@examle.com',
  password: 'qwerty123',
};

const options = {
  method: 'POST',
  body: JSON.stringify(user),
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

export default async function register() {
  try {
    const getCategories = await fetch(`${BASE_URL}`, options);
    const result = await getCategories.json();
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
}
