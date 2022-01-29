import React from 'react'

const Temp = ({label, value}) => {
    return (
        <div>
            <label>{label}</label>
            <span>{value}</span>
        </div>
    )
}

export default Temp
