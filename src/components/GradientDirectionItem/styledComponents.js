// Style your elements here
import styled from 'styled-components'

export const ButtonElement = styled.button`
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  height: 45px;
  width: 105px;
  margin-right: 10px;
  border-radius: 10px;
  font-family: Roboto;
  font-weight: bold;
  border-color: transparent;
  color: #334155;
  background-color: ${props => (props.isActive ? '#ffffff' : '#ededed')};
  cursor: pointer;
  margin-bottom: 20px;

  @media (max-width: 576px) {
    height: 45px;
    width: 180px;
  }
`
