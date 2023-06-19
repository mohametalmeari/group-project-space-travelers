import PropTypes from 'prop-types';

const Mission = ({
  name, description,
}) => (
  <tr>
    <td>{name}</td>
    <td>
      {description}
    </td>
    <td>NOT A MEMBER</td>
    <td>
      <button type="button">
        Join Mission
      </button>
    </td>
  </tr>
);

Mission.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,

};
export default Mission;
