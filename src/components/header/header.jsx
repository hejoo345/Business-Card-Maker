import React, { memo } from 'react';
import styles from './header.module.css';
const Header = memo(({ onLogout}) => {
    return(
        <header className={styles.header}>
            <h2>Business Card Maker</h2>
            {onLogout &&(
            <button className={styles.logoutBtn} onClick={onLogout}>
                Logout
                </button>
            )}
        </header>
    );
    });

export default Header;