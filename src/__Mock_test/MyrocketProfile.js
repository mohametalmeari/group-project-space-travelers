import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Container, ListGroup } from 'react-bootstrap';
import { reservedCancel } from '../Redux/Rocket/rocketSlice';

const MyrocketProfile = ({ rocketData }) => {
  const dispatch = useDispatch();
  const cancelReservation = (rocketId) => {
    dispatch(reservedCancel(rocketId));
  };
  return (
    <Container>

      <ListGroup>

        <ListGroup.Item>
          <div className="ms-2 me-auto">
            <h5>{rocketData.rocket_name}</h5>
          </div>

          <Button type="button" variant="primary" size="sm" onClick={() => cancelReservation(rocketData.id)}>Cancel Reservation</Button>

        </ListGroup.Item>
      </ListGroup>

    </Container>
  );
};
MyrocketProfile.propTypes = {
  rocketData: PropTypes.shape({
    id: PropTypes.string.isRequired,
    rocket_name: PropTypes.string.isRequired,
  }).isRequired,
};
export default MyrocketProfile;
