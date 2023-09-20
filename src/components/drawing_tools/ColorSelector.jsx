import {ChromePicker} from 'react-color'

export default function ColorSelector (props) {
    const {currentColor, setColor} = props;
    
    return (
        <>
            <ChromePicker
            color={currentColor}
            onChangeComplete={updatedColor => setColor(updatedColor.hex)}
            />
        </>
    )
}