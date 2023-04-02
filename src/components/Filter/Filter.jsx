import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ handleFilter, value }) => {
  return (
    <div className={css.wrap}>
      <label htmlFor="filter">Find contacts by name</label>
      <input type="text" name="filter" value={value} onChange={handleFilter} />
    </div>
  );
};

Filter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
