import { useSelector } from 'react-redux';
import styles from '../styles/missions.module.css';

const JoinedMissions = () => {
  const { missions } = useSelector((state) => state.mission);
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
