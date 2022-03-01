import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { AboutPage } from './pages/AboutPage';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { UsersPage } from './pages/UsersPage';
import { UserPage } from './pages/UserPage';
import { Dashboard } from './pages/Dashboard';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/users' element={<UsersPage />} />
        {/* redirect es navigate (el replace sirve para que no retorne a la anterior que reemplazo) */}
        <Route path='/usuarios' element={<Navigate replace to='/users' />} />
        <Route path='/users/:id' element={<UserPage />} />
        <Route path='/users/new' element={<p>New User</p>} />
        {/* ruta con rutas hijas o subrutas */}
        <Route path='/dashboard/' element={<Dashboard />}>
          <Route path='welcome' element={<p>Welcome</p>} />
          <Route path='goodbye' element={<p>Goodbye</p>} />
        </Route>
        {/* pagina 404 */}
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
