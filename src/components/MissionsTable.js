import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Mission from './Mission';
import { getMissions } from '../Redux/features/missions/missionSlice';

const MissionsTable = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissions());
  }, []);

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
        <Mission />
        <Mission />
      </tbody>
    </table>
  );
};
export default MissionsTable;
