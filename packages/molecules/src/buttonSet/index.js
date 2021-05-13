/*@jsx jsx*/
import React from 'react';
import {jsx, css} from '@emotion/react'
import styled from '@emotion/styled'
import {Button, Label} from '@acme/atoms'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`

export const ButtonSet = ({children, label}) => {

    const buttons = children.filter(({type}) => {
        if (type.name !== Button.name) {
            console.warn(`Got an invalid child element <${type.name}>- ignored`)
            return false
        }
        return true;
    })

    return (
        <Container>
            {label && <Label text={label} />}
            <Buttons>{buttons}</Buttons>
        </Container>
    )
}
