import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { fetchQueryMovies } from '../services/fetchApi';
import { Loader } from '../components/Loader/Loader';

function Movies() {
  const [searchValue, setSearchValue] = useState('');
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const queryString = searchParams.get('query');

  useEffect(() => {
    async function fetchData() {
      try {
        let data;
        if (!searchValue && queryString) {
          data = await fetchQueryMovies(queryString);
        } else {
          data = await fetchQueryMovies(searchValue);
        }
        setMovies([...data]);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    }
    fetchData();
  }, [searchValue]);

  function searchHandle(data) {
    setSearchValue(data);
  }

  return (
    <>
      <SearchBar query={searchHandle} />
      <MoviesList data={movies} location={location} />
    </>
  );
}

export default Movies;
