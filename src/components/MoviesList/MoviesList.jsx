import { Link } from 'react-router-dom';
import css from './MoviesList.module.css';

export function MoviesList({ data, title, location }) {
  return (
    <section>
      <h2 className={css.title}>{title}</h2>
      <ul className={css.list}>
        {data.map(movie => (
          <li className={css.item} key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.name ?? movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
