import React from 'react'
import {Button} from '@acme/atoms'

const ButtonSetStyle ={
'display': 'flex',
'flexDirection': 'row',
}
export const ButtonSet = ({children}) =>{

  const buttons = children.filter( ({type}) => {
      if(type.name !== Button.name){
        console.warn(`Got an invalid child element <${type.name}>- ignored`)
        return false
      }
      return true;
  } )

  return (
    <div style={ButtonSetStyle}>{ buttons }</div>
  )
}
