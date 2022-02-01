import React from 'react'
import styles from './Temperature.module.css'

const Temperature = ({label, value}) => {
    return (
        <div className={styles.temp}>
            <label>{label}</label>
            <br />
            <span>{value}ºC</span>
        </div>
    )
}

export default Temperature
