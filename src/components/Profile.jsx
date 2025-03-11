import { Link, useParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Popeye from './Popeye.jsx';
import Spinach from './Spinach.jsx';
import DefaultProfile from './DefaultProfile.jsx';

export default function Profile() {
  const { name } = useParams();
  return (
    <div>
      <h1>Hello from profile page</h1>
      <p>So how are you?</p>
      <Link to="/">Click here to go back</Link>
      <hr />
      <h2>The profile visited iss here</h2>
      {name === 'popeye' ? (
        <Popeye />
      ) : name === 'spinach' ? (
        <Spinach />
      ) : (
        <DefaultProfile />
      )}
    </div>
  );
}
