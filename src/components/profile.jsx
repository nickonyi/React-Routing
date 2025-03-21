import { Outlet, useParams } from 'react-router-dom';
import DefaultProfile from './default';
import Popeye from './popeye';
import Spinach from './spinach';

const Profile = () => {
  const { profile } = useParams();
  console.log(profile);

  return (
    <div>
      <h1>Hello from profile page!</h1>
      <p>So, how are you?</p>
      <hr />
      <h2>The profile visited is here:</h2>
      <Outlet />
      {profile === 'Popeye' ? (
        <Popeye />
      ) : profile === 'Spinach' ? (
        <Spinach />
      ) : (
        <DefaultProfile />
      )}
    </div>
  );
};

export default Profile;
