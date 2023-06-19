import { useSelector } from 'react-redux';
import Mission from './Mission';

const MissionsTable = () => {
  const { missions, isLoading } = useSelector((state) => state.mission);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
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
