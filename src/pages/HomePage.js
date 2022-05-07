import { Link } from 'react-router-dom';

const userId = 10;

const HomePage = () => {
  return (
    <div>
      <h1>Aplication</h1>
      {/*<Link to="/users">Users</Link>*/}
      <Link to={`/users/${userId}`}>Users</Link>
    </div>
  );
};

export default HomePage;
