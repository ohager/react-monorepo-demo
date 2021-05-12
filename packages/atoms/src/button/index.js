import React from 'react';
import {format} from 'date-fns'

const ButtonStyle = {
    padding: '1rem 1rem',
    margin: '0.5rem',
    fontWeight: 'bold',
    borderRadius: '8px',
    background: 'red'
}
export const Button = ({children, onClick}) => {

    const date = format(new Date(), 'yyyy-MM-dd')

    return (
        <>
            <pre>{date}</pre>
            <button onClick={onClick}
                    style={ButtonStyle}
                    type="button"
            >
                {children}
            </button>
        </>
    )
}

