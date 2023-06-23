import { useSelector } from 'react-redux';
import styles from '../styles/missions.module.css';

const JoinedMissions = () => {
  const { missions } = useSelector((state) => state.mission);
  const missionsJoined = missions.filter((mission) => mission.reserved);

  if (missionsJoined.length === 0) {
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
        {missionsJoined.map((item) => (
          <li className={styles.joinedMissionItem} key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default JoinedMissions;
