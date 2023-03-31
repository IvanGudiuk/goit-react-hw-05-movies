import { Link, useLocation, Outlet } from 'react-router-dom';
// import { BsArrowLeft } from 'react-icons/bs';
import css from './Details.module.css';

export function Details({ data }) {
  const { poster_path, title, release_date, vote_average, overview, genres } =
    data;
  const rating = Math.round(vote_average * 10) + '%';
  const genresList = genres.map(genre => genre.name).join('');
  const year = release_date.split('-')[0];
  const location = useLocation();

  return (
    <>
      <section>
        {/* <BsArrowLeft /> */}
        <Link to={location?.state?.from ?? '/'}>Go back</Link>
        <div className={css.wrapper}>
          <img
            src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
            alt={title}
          />
          <div className={css.descr}>
            <h2 className={css.title}>{`${title} (${year})`}</h2>
            <p className={css.text}>User score: {rating}</p>
            <h3 className={css.subtitle}>Overview</h3>
            <p className={css.text}>{overview}</p>
            <h3 className={css.subtitle}>Genres</h3>
            <p className={css.text}>{genresList}</p>
          </div>
        </div>
      </section>
      <section>
        <p className={css.text}>Additional information</p>
        <ul className={css.list}>
          <li className={css.item}>
            <Link to="cast">Cast</Link>
          </li>
          <li className={css.item}>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </section>
      <Outlet />
    </>
  );
}
