import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  Container,
  Header,
  Paragraph,
  ColorContainer,
  ColorSeparator,
  ColorParagraph,
  Input,
  GenerateButton,
  DirectionContainer,
  ListItem,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    activeDirection: gradientDirectionsList[0].value,
    startColor: '#8ae323',
    endColor: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  onChangeStartColor = event => {
    this.setState({startColor: event.target.value})
  }

  onChangeEndColor = event => {
    this.setState({endColor: event.target.value})
  }

  onChangeGradientDirection = value => {
    this.setState({activeDirection: value})
  }

  onGenerateColor = () => {
    const {startColor, endColor, activeDirection} = this.state
    this.setState({
      gradientValue: `to ${activeDirection}, ${startColor}, ${endColor}`,
    })
  }

  render() {
    const {activeDirection, startColor, endColor} = this.state
    return (
      <Container
        data-testid="gradientGenerator"
        activeDirection={activeDirection}
        startColor={startColor}
        endColor={endColor}
      >
        <Header>Generate a CSS Color Gradient</Header>
        <Paragraph>Choose Direction</Paragraph>
        <DirectionContainer>
          {gradientDirectionsList.map(eachDirectionList => (
            <ListItem key={eachDirectionList.directionId}>
              <GradientDirectionItem
                eachDirectionList={eachDirectionList}
                activeDirection={activeDirection}
                onChangeGradientDirection={this.onChangeGradientDirection}
              />
            </ListItem>
          ))}
        </DirectionContainer>
        <Paragraph>Pick the Colors</Paragraph>
        <ColorContainer>
          <ColorSeparator>
            <ColorParagraph>{startColor}</ColorParagraph>
            <Input
              type="color"
              value={startColor}
              onChange={this.onChangeStartColor}
            />
          </ColorSeparator>
          <ColorSeparator>
            <ColorParagraph>{endColor}</ColorParagraph>
            <Input
              type="color"
              value={endColor}
              onChange={this.onChangeEndColor}
            />
          </ColorSeparator>
        </ColorContainer>
        <GenerateButton onClick={this.onGenerateColor}>Generate</GenerateButton>
      </Container>
    )
  }
}

export default GradientGenerator
