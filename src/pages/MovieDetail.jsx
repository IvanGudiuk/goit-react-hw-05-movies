import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../services/fetchApi';
import { Details } from '../components/Details/Details';

function MovieDetail() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  console.log(movieId);
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchMovieDetails(movieId);
        setMovie({ ...data });
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    }

    fetchData();
  }, [movieId]);

  return <Details data={movie} />;
}

export default MovieDetail;
