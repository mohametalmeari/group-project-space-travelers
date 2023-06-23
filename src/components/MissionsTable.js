import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Mission from './Mission';
import styles from '../styles/missions.module.css';
import { getMissions } from '../Redux/features/missions/missionSlice';

const MissionsTable = () => {
  const { missions, isLoading } = useSelector((state) => state.mission);
  const dispatch = useDispatch();
  useEffect(() => {
    if (missions.length === 0) {
      dispatch(getMissions());
    }
  }, [dispatch, missions.length]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <table className={styles.missionsTable}>
      <thead>
        <tr>
          <th className={styles.tableCell}>Mission</th>
          <th className={styles.tableCell}>Description</th>
          <th className={styles.tableCell}>Status</th>
          <th className={styles.tableCell}> </th>
        </tr>
      </thead>
      <tbody>
        {missions.map((item) => (
          <Mission
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            reserved={item.reserved}
          />
        ))}
      </tbody>
    </table>
  );
};

export default MissionsTable;
