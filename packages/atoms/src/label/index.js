/*@jsx jsx*/
import {jsx} from '@emotion/react'
import styled from '@emotion/styled'

const StyledDiv = styled.div`
  font-weight: bold;
  border: 1px solid red;
  border-radius: 8px;
  width: 100%
`

export const Label = ({text, className}) => <StyledDiv className={className}>{text}</StyledDiv>

