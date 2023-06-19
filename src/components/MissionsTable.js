import Mission from './Mission';

const MissionsTable = () => (
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
export default MissionsTable;
