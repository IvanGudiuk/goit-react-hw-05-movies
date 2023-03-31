import { useState, useEffect } from 'react';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { fetchQueryMovies } from '../services/fetchApi';

function Movies() {
  const [searchValue, setSearchValue] = useState('');
  const [movies, setMovies] = useState([]);

  function searchHandle(data) {
    setSearchValue(data);
  }

  useEffect(() => {
    async function fetchData() {
      try {
        if (!searchValue.trim()) return;
        const data = await fetchQueryMovies(searchValue);
        setMovies([...data]);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    }
    fetchData();
  }, [searchValue]);

  return (
    <>
      <SearchBar query={searchHandle} />
      <MoviesList data={movies} reference="/movies" />
    </>
  );
}

export default Movies;
