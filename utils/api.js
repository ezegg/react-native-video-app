const BASE_API = 'https://yts.am/api/v2/';

class Api {
  async getSuggestion(id) {
    const url = `${BASE_API}movie_suggestions.json?movie_id=${id}`;
    const query = await fetch(url);
    const response = await query.json();
    return response.data.movies;
  }
}

export default new Api();
