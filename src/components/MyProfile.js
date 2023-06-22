
import ReservedRocketDisplay from '../RocketComponent/ReservedRockets';

import JoinedMissions from './JoinedMissions';


const MyProfile = () => (
  <div className="my-profile">
    <section>
      <JoinedMissions />
    </section>
    <section>
      <ReservedRocketDisplay />
    </section>
  </div>
);
export default MyProfile;
