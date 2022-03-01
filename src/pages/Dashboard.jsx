import { useNavigate, Link, Outlet } from 'react-router-dom';

export const Dashboard = () => {
  // reemplaza useHistory
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet />

      <button onClick={handleOnClick}>Logout</button>
      <br />
      <Link to='welcome'>say welcome</Link>
      <br />
      <Link to='goodbye'>say goodbye</Link>

      {/* Outlet indica donde va el subcomponente */}

      {/* <Routes>
        <Route path='welcome' element={<p>Welcome</p>} />
      </Routes> */}
    </div>
  );
};
