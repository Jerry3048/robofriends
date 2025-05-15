import PropTypes from 'prop-types';

const SearchBar = ({ placeholder, onSearchChange }) => {
  return (
    <div className="p-4 flex justify-center gap-2">
      <input
        type="text"
        placeholder={placeholder||"Search robots..."}
        onChange={(e) => onSearchChange(e.target.value)}
        className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 w-200"
      />
    </div>
  );
};

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  onSearchChange: PropTypes.func.isRequired,
};

export default SearchBar;