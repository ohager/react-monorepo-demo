import React from 'react'

export const Button = ({children, onClick}) =>
  <button onClick={onClick}
          type="button">
    {children}
  </button>

