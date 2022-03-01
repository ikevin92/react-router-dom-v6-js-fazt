import { Link } from 'react-router-dom';

const userId = 10;

export const HomePage = () => {
  return (
    <div>
      <h1>Aplication</h1>
      <Link to={`/users/${userId}`}>Usuarios</Link>
      {/* <Link to='/users'>Usuarios</Link> */}
    </div>
  );
};
