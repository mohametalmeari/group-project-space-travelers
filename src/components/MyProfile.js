import { useSelector } from 'react-redux';

const MyProfile = () => {
  const { missions } = useSelector((state) => state.mission);
  return (
    <>
      <section>
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
      </section>
      <section>
        <h2>My Rockets</h2>
        <ul>
          <li>Falcon 9</li>
        </ul>
      </section>
    </>
  );
};
export default MyProfile;
