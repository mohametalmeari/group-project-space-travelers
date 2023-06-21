import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRocket } from '../Redux/Rocket/rocketSlice';
import RocketItem from './RocketItem';

const RocketList = () => {
  const { rockets, isLodaing, error } = useSelector((store) => store.rocket);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRocket());
  }, [dispatch]);
  if (isLodaing) {
    return <p>is Loading...</p>;
  }
  if (error) {
    return <p>Error occurred while fetching rocket data.</p>;
  }
  return (
    <>
      {rockets.map((rocketItems) => (
        <RocketItem key={rocketItems.id} rocketData={rocketItems} />
      )) }
    </>
  );
};

export default RocketList;
