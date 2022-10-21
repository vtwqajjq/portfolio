import React from 'react';
import styles from './SectionHeader.module.css'

const SectionHeader = (props) => {
    return (
        <div className={styles.header_text}>
           <h2>{props.headerText}</h2>
           <p>{props.headerTitle}</p>
        </div>
    );
};

export default SectionHeader;