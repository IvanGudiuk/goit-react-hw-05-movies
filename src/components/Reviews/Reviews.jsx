import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesReviews } from '../../services/fetchApi';
import Loader from '../Loader/Loader';
import css from './Reviews.module.css';

export default function Reviews() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchMoviesReviews(movieId);
        setData(data);
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
    return <div className={css.noInfo}>Nothing found</div>;
  }

  return (
    <ul className={css.list}>
      {data.map(({ author, content, id }) => (
        <li key={id}>
          <h2>{author}</h2>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
}
