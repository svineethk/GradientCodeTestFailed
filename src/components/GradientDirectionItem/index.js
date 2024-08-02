import {ButtonElement} from './styledComponents'

// Write your code here

const GradientDirectionItem = props => {
  const {eachDirectionList, activeDirection, onChangeGradientDirection} = props
  const {value, displayText} = eachDirectionList
  const isActive = activeDirection === value

  const onChangeDirection = () => {
    onChangeGradientDirection(value)
  }

  return (
    <ButtonElement isActive={isActive} onClick={onChangeDirection}>
      {displayText}
    </ButtonElement>
  )
}

export default GradientDirectionItem
