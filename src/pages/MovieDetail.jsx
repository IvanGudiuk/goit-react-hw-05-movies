import { Suspense, useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../services/fetchApi';
import { Details } from '../components/Details/Details';
import Loader from '../components/Loader/Loader';

function MovieDetail() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

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

  if (!movie) {
    return <></>;
  }

  return (
    <>
      <Details data={movie} />;
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default MovieDetail;
