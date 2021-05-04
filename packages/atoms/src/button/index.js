import React from 'react';

const ButtonStyle ={
  padding: '1rem 1rem',
  margin: '0.5rem',
  fontWeight: 'bold',
  borderRadius: '8px',
  // background: '#4c607d'
  background: 'green'
}
export const Button = ({children, onClick}) =>
  <button onClick={onClick}
          style={ButtonStyle}
          type="button"
  >
    {children}
  </button>

