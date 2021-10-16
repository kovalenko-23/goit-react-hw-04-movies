import PropTypes from 'prop-types';

export default function SearchInput({ onSubmit }) {
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit(e.target.elements.searchInput.value);
        // e.target.elements.searchInput.value = '';
        e.target.reset();
      }}
    >
      <input
        type="text"
        name="searchInput"
        autoComplete="off"
        placeholder="Search Movies"
      />
      <button type="submit">Find</button>
    </form>
  );
}

SearchInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
