import {useState, useEffect} from 'react';
import movies from '../api/movies';

export default () => {
  const [results, setResults] = useState([]);

  const apiFetch = async () => {
    try {
      const response = await movies.get('/movies.json');

      setResults(
        response.data.movies.map(movie => {
          return {
            ...movie,
            favorite: false,
          };
        }),
      );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    apiFetch();
  }, []);

  return [results, setResults];
};
