import {ChromePicker} from 'react-color'

export default function ColorSelector (props) {
    const {currentColor, updateCurrentColor} = props;
    
    return (
        <>
            <ChromePicker
            color={currentColor}
            onChangeComplete={updatedColor => updateCurrentColor(updatedColor.hex)}
            />
        </>
    )
}