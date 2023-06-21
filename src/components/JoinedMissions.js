import { useSelector } from 'react-redux';

const JoinedMissions = () => {
  const { missions } = useSelector((state) => state.mission);
  return (
    <>
      <h2>My Missions</h2>
      <ul>
        {missions.map((item) => (
          item.reserved
            && (
            <li key={item.id}>
              {item.name}
            </li>
            )
        ))}
      </ul>
    </>
  );
};
export default JoinedMissions;
