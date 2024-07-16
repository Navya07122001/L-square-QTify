import React from 'react';
import styles from './ButtonStyle.module.css'
function ButtonStyle({children}) {
    return (
        <div>
           <button className={styles.design} >{children}</button>
        </div>
    );
}

export default ButtonStyle;