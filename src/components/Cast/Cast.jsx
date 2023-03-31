import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from '../../services/fetchApi';
import Loader from '../Loader/Loader';
import css from './Cast.module.css';

function Cast() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchMovieCredits(movieId);
        setData([...data]);
        setIsLoading(false);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    }
    fetchData();
  }, [movieId]);

  useEffect(() => {
    if (!isLoading) {
      window.scrollTo({
        top: '300',
        behavior: 'smooth',
      });
    }
  }, [isLoading]);

  if (isLoading) {
    return <Loader />;
  }

  if (data.length === 0) {
    return <div className={css.noInfo}>There is no information</div>;
  }

  return (
    <ul className={css.list}>
      {data.map(({ profile_path, name, character, id }) => (
        <li key={id}>
          <img
            src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
            alt={name}
            className={css.image}
          />
          <p className={css.name}>{name}</p>
          <p>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
}

export default Cast;
