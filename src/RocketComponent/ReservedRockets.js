import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import MyrocketProfile from './MyrocketProfile';

const ReservedRocketDisplay = () => {
  const rockets = useSelector((store) => store.rocket.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);
  return (
    <Container>
      <h3>My Rockets</h3>
      <div>
        <div className="colums">
          {reservedRockets.length > 0 ? (
            reservedRockets.map((rocket) => (
              <MyrocketProfile key={rocket.id} rocketData={rocket} />
            ))
          ) : (
            <p>Currently no rockets reserved.</p>
          )}
        </div>
      </div>

    </Container>
  );
};
export default ReservedRocketDisplay;
