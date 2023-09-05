import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { UserMenu } from './UserMenu';

export const AppBar = () => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: 8,
        borderBottom: '2px solid grey',
        marginBottom: 18,
      }}
    >
      <nav>
        <Link to="/login">Log in</Link>
      </nav>
      {isLoggedIn && <UserMenu />}
    </header>
  );
};
