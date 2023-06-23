import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Badge from 'react-bootstrap/Badge';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { reservedCancel, reserveRocket } from '../Redux/Rocket/rocketSlice';

const RocketItem = ({ rocketData }) => {
  const dispatch = useDispatch();
  const isReserved = rocketData.reserved;
  const HandleReserve = () => {
    if (isReserved) {
      dispatch(reservedCancel(rocketData.id));
    } else {
      dispatch(reserveRocket(rocketData.id));
    }
  };
  const firstImage = rocketData.flickr_images.length > 0 ? rocketData.flickr_images[0] : '';
  return (

    <li style={{ listStyle: 'none' }}>
      <Container>
        <Row>
          <Col xs={6} md={4}>

            {firstImage && <img src={firstImage} alt="Rocket" style={{ width: '90%', height: '80%' }} />}

          </Col>
          <Col xs={12} md={8}>

            <h2>{rocketData.rocket_name}</h2>
            <p>
              {' '}
              {(isReserved && <Badge bg="success">Reserved</Badge>)}
              {' '}
              {rocketData.description}

            </p>

            {isReserved ? (
              <Button type="button" variant="primary" size="sm" onClick={HandleReserve}> Cancel Reserve</Button>)
              : (
                <Button type="button" variant="primary" size="sm" onClick={HandleReserve}>Reserve Rocket</Button>

              )}
          </Col>

        </Row>
      </Container>
    </li>

  );
};
RocketItem.propTypes = {
  rocketData: PropTypes.shape({
    id: PropTypes.string.isRequired,
    rocket_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    flickr_images: PropTypes.arrayOf(PropTypes.string).isRequired,
    reserved: PropTypes.bool.isRequired,
  }).isRequired,
};

export default RocketItem;
