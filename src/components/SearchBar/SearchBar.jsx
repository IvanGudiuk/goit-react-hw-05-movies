import css from './SearchBar.module.css';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { useSearchParams } from 'react-router-dom';

export function SearchBar({ query }) {
  const [value, setValue] = useLocalStorage('searchValue', ' ');
  const [searchParams, setSearchParams] = useSearchParams();

  const handleInputChange = e => {
    const { value } = e.target;
    setValue(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const string = form.elements.search.value;
    query(string);
    setValue('');
    if (searchParams) setSearchParams({ query: string });
  };

  return (
    <section>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          className={css.input}
          value={value}
          onChange={handleInputChange}
          name="search"
        />
        <button className={css.btn} type="submit" disabled={!value}>
          Search
        </button>
      </form>
    </section>
  );
}
