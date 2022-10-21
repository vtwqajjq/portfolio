import React from 'react';
import styles from  './About.module.css'
import SectionHeader from "../../UI/SectionHeader";


const About = () => {
    return (
        <section className={styles.about_section}>
            <SectionHeader headerText={'About Me'} headerTitle={'Know Me More'}/>
            <div className={styles.about_info}>
                <div className={styles.info_text}>
                    <h2>I'm <span className={styles.primary_span}>Viktor Storozhenko, </span>a React developer</h2>
                    <p>Hello. Now I live in Minsk. I'm an aspiring React developer.I graduated from brest state technical university faculty of Civil Engineering. Worked in a factory for four years in my profession. Then I wanted to make my own website and started learning js on Udemy, RSschool, Stepik.</p>
                    <p>Now I'm currently finishing my training as a React developer. There are a few projects you can see in the Portfolio section. I am actively looking for a job, ready for an internship with the prospect of employment. From experience: rewrote projects from JS to TS, did small shuffles in friends' projects.</p>
                </div>
                <div className={styles.info_table}>
                    <ul>
                        <li><span>Name: </span> Viktor Storozhenko</li>
                        <li><span>Email: </span>vitywqajjq@icloud.com</li>
                        <li><span>Age: </span>26</li>
                        <li><span>From: </span>Belarus, Minsk</li>
                    </ul>
                    <a href="https://drive.google.com/file/d/18INIRTe8wa9WX5GO3gjeFhDnMCQ5zD-J/view?usp=sharing">Download CV</a>
                </div>
            </div>
            <div className={styles.about_education}>
                <h3>Education</h3>
                <div className={styles.education_places}>
                    <div className={styles.place}>
                        <h5>Bachelor. Faculty of Civil Engineering. Building Construction Technologies</h5>
                        <p>Brest state technical university</p>
                        <p>2013-2018</p>
                    </div>
                    <div className={styles.place}>
                        <h5>React JS development</h5>
                        <p>IT-incubator</p>
                        <p>06/2022-present</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;