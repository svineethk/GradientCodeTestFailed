// Style your elements here
import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    to ${props => props.activeDirection},
    ${props => props.startColor},
    ${props => props.endColor}
  );
  font-family: Roboto;
  color: #ffffff;
`

export const Header = styled.h1`
  font-family: Roboto;
  font-weight: bold;
  color: #000000;
  margin-bottom: 30px;
`

export const DirectionContainer = styled.ul`
  height: 45px;
  width: 450px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 576px) {
    height: 130px;
    width: 400px;
    flex-wrap: wrap;
  }
`

export const ListItem = styled.li`
  list-style-type: none;
`

export const Paragraph = styled.p`
  font-family: Roboto;
  margin-bottom: 30px;
  margin-top: 30px;
`

export const ColorParagraph = styled.p`
  font-family: Roboto;
  font-weight: bold;
`

export const Input = styled.input`
  height: 55px;
  width: 90px;
  border-color: transparent;
  background-color: transparent;
`

export const ColorContainer = styled.div`
  height: 90px;
  width: 250px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`
export const ColorSeparator = styled.div`
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const GenerateButton = styled.button`
  height: 35px;
  width: 90px;
  background-color: #00c9b7;
  color: #1e293b;
  border-radius: 6px;
  border-color: transparent;
  font-family: Roboto;
  font-weight: bold;
  cursor: pointer;
`
