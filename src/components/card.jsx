import PropTypes from 'prop-types';
const Card = ({ id, name, username, email }) => {
  return (
    <div className="bg-lime-500 shadow-md rounded-lg p-4 text-center hover:scale-105 transform transition-transform duration-300 ">
      <img
        src={`https://robohash.org/${id}`}
        alt="robot"
        className="w-32 h-32 rounded-full mx-auto"
      />
      <h2 className="text-xl font-bold mt-4 text-white">{name}</h2>
      <p className="text-gray-50 mt-2">{username}</p>
      <p className="text-gray-50 mt-2">{email}</p>
    </div>
  );
};
Card.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};


export default Card;