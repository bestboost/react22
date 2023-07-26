import React, {useContext}from 'react';
import ctx from '../../context/auth/context';
import styles from './UserMenu.module.css';

export default function UserMenu({ onLogOut, user }) {
  const authContext = useContext(ctx);
  console.log("UserMenu  authContext:", authContext)
  
  return (
    <div className={styles.container}>
      <img
        src={user.avatar}
        alt=""
        width="32"
        height="32"
        className={styles.avatar}
      />
      <p className={styles.name}>Добро пожаловать, {user.name}</p>
      <button type="button" onClick={onLogOut}>
        Выйти
      </button>
    </div>
  );
}