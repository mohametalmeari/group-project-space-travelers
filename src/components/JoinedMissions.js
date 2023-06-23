import { useSelector } from 'react-redux';
import styles from '../styles/missions.module.css';

const JoinedMissions = () => {
  const { missions } = useSelector((state) => state.mission);
  const noReserved = missions.every((item) => !item.reserved);
  if (noReserved) {
    return (
      <div className={styles.joinedMissionsContainer}>
        <h2 className={styles.joinedMissionsHeader}>My Missions</h2>
        <p className={styles.noMissionsJoined}>No missions joined</p>
      </div>
    );
  }

  return (
    <div className={styles.joinedMissionsContainer}>
      <h2 className={styles.joinedMissionsHeader}>My Missions</h2>
      <ul className={styles.joinedMissionsList}>
        {missions.map((item) => (
          item.reserved
            && (
            <li className={styles.joinedMissionItem} key={item.id}>
              {item.name}
            </li>
            )
        ))}
      </ul>
    </div>
  );
};
export default JoinedMissions;
