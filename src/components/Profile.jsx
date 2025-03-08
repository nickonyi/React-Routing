import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

export default function Profile() {
  return (
    <div>
      <h1>Hello from profile page</h1>
      <p>So how are you?</p>
      <Link to="/">Click here to go back</Link>
      <hr />
      <h2>The profile visited is here</h2>
      <Outlet />
    </div>
  );
}
