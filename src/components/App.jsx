import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Movies from '../pages/Movies';
import MovieDetail from '../pages/MovieDetail';
import Layout from './Layout/Layout';
import Home from '../pages/Home';
// import { Cast } from './Cast/Cast';
// import { Reviews } from './Reviews/Reviews';

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId" element={<MovieDetail />} />
            {/* <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} /> */}
            {/* </Route> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
