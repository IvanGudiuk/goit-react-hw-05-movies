import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';
function Layout() {
  return (
    <>
      <header className={css.header}>
        <nav>
          <ul className={css.list}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? `${css.active}` : `${css.link}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/movies"
                className={({ isActive }) =>
                  isActive ? `${css.active}` : `${css.link}`
                }
              >
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
export default Layout;
