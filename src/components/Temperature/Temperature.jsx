import React from 'react'
import styles from './Temperature.module.css'

const Temperature = ({label, value}) => {
    return (
        <div className={styles.temp}>
            <label>{label}</label>
            <span>{value}</span>
        </div>
    )
}

export default Temperature
