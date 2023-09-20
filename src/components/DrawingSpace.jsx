import { useState } from "react"

import ButtonsTools from "./drawing_tools/ButtonsTools"
import ColorSelector from './drawing_tools/ColorSelector'
import DrawingCanvas from "./drawing_tools/DrawingCanvas";

export default function DrawingSpace() {
    const [currentColor, setColor] = useState("#ff0000");
    const [isDrawing, setIsDrawing] = useState(true);
    const [dimension, setDimensions] = useState(16);

    const handleDrawToggle = () => {
        setIsDrawing(true);
    }
    
    const handleEraseToggle = () => {
        setIsDrawing(false);
    }

    return (
        <div className="drawing-space">
            <div className="left-side">
                <ColorSelector currentColor={currentColor} 
                                setColor={setColor}/>
                <ButtonsTools handleDrawToggle={handleDrawToggle} handleEraseToggle={handleEraseToggle}/>
            </div>
            <div className="right-side">
                <DrawingCanvas currentColor={currentColor} isDrawing={isDrawing} dimension={dimension} />
            </div>
        </div>
    )
}