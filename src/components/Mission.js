import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../Redux/features/missions/missionSlice';
import styles from '../styles/missions.module.css';

const Mission = ({
  id, name, description, reserved,
}) => {
  const dispatch = useDispatch();
  return (
    <tr className={styles.mission}>
      <td className={styles.nameTableCell}>{name}</td>
      <td className={styles.tableCell}>
        {description}
      </td>
      {
      !reserved && (
      <>
        <td className={styles.tableCell}>
          <span className={styles.notActiveStatus}>NOT A MEMBER</span>
        </td>
        <td className={styles.tableCell}>
          <button className={styles.joinBtn} type="button" onClick={() => dispatch(joinMission(id))}>
            Join Mission
          </button>
        </td>
      </>
      )
      }
      {
      reserved && (
      <>
        <td className={styles.tableCell}>
          <span className={styles.activeStatus}>Active Member</span>
        </td>
        <td className={styles.tableCell}>
          <button className={styles.leaveBtn} type="button" onClick={() => dispatch(leaveMission(id))}>
            Leave Mission
          </button>
        </td>
      </>
      )
      }

    </tr>
  );
};

Mission.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
  reserved: PropTypes.bool,
};
export default Mission;
