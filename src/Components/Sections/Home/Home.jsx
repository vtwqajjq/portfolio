import React from 'react';
import styles from './Home.module.css'

const Home = () => {
    return (
        <section className={styles.home_section}>
            <div className={styles.section_info}>
                <div className={styles.section_text}>
                    <p>Welcome</p>
                    <h1>My name is Viktor. I'm React developer</h1>
                </div>
                <div className={styles.section_photo}>
                    <img src="" alt=""/>
                </div>
                <a href="" className={styles.section_button}>Hire Me</a>
            </div>
        </section>
    );
};

export default Home;