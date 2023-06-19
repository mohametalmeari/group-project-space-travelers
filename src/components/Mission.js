import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission } from '../Redux/features/missions/missionSlice';

const Mission = ({
  id, name, description, reserved,
}) => {
  const dispatch = useDispatch();
  return (
    <tr>
      <td>{name}</td>
      <td>
        {description}
      </td>
      {
      !reserved && (
      <>
        <td>NOT A MEMBER</td>
        <td>
          <button type="button" onClick={() => dispatch(joinMission(id))}>
            Join Mission
          </button>
        </td>
      </>
      )
      }
      {reserved && <td>Active MEMBER</td>}

    </tr>
  );
};

Mission.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};
export default Mission;
