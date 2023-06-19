import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Mission from './Mission';
import { getMissions } from '../Redux/features/missions/missionSlice';

const MissionsTable = () => {
  const { missions, isLoading } = useSelector((state) => state.mission);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading missions...</div>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>DescriptionStatus</th>
        </tr>
      </thead>
      <tbody>
        {missions.map((item) => (
          <Mission
            key={item.id}
            name={item.name}
            description={item.description}
          />
        ))}
      </tbody>
    </table>
  );
};

export default MissionsTable;
