import {useContext} from 'react';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import authContext from '../../context/auth/context';
import styles from './Appbar.module.css'

export default function AppBar() {
  const {isLoggedIn, user, onLogIn, onLogOut} = useContext(authContext);
  
  return (
    <header className={styles.header}>
     <Navigation />
                
          {isLoggedIn ? (
            <UserMenu onLogOut={onLogOut} user={user} />
          ) : (
            <button type="button" onClick={onLogIn}>
              Войти
            </button>
          )}
     </header>
  );
}