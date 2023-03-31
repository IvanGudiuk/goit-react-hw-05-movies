import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../services/fetchApi';
import { MoviesList } from '../components/MoviesList/MoviesList';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchTrendingMovies();
        setMovies([...data]);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <MoviesList data={movies} title={'Trending today'} />
    </>
  );
}

export default Home;
