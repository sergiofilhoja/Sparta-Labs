const key = '667eacf9';
const BASE_API = `https://api.hgbrasil.com/weather?key=${key}&city_name`;

export default {
  search: async (name) => {
    const req = await fetch(`${BASE_API}=${name}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    const res = await req.json();
    return res;
  }
}