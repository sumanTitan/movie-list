
const myHeaders = new Headers();

const myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' };

const imdb = {
  getByName(name) {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=c5976a27831e8c9d9e15703349a9400a&language=en-US&query=${name}&page=1`, myInit)
      .then(data => data.json())
      .catch(console.error);
  },
  getTopRated() {
    return fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=c5976a27831e8c9d9e15703349a9400a', myInit)
      .then(data => data.json())
      .catch(console.error);
  }
};
export function searchByName(name) {
  return imdb.getByName(name);
}

export function getTopRated() {
  return imdb.getTopRated();
}
