import { useSelector } from 'react-redux';
import Mission from './Mission';
import styles from '../styles/missions.module.css';

const MissionsTable = () => {
  const { missions, isLoading } = useSelector((state) => state.mission);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <table>
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
