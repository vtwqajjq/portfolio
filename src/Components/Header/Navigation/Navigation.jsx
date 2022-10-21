import React from 'react';
import styles from './Navigation.module.css'
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <nav className={styles.header_nav}>
            <ul className={styles.navbar_nav}>
                <li className={styles.nav_item}>
                    <NavLink to={'/'}>Home</NavLink>
                </li>
                <li className={styles.nav_item}>
                    <NavLink to={'/about'}>About</NavLink>
                </li>
                <li className={styles.nav_item}><a href="#" className={styles.nav_link}>What I Do</a></li>
                <li className={styles.nav_item}><a href="#" className={styles.nav_link}>Resume</a></li>
                <li className={styles.nav_item}><a href="#" className={styles.nav_link}>Portfolio</a></li>
                <li className={styles.nav_item}><a href="#" className={styles.nav_link}>Contact</a></li>
            </ul>


        </nav>
    );
};

export default Navigation;