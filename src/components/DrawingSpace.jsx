import { useState } from "react"

import ButtonsTools from "./drawing_tools/ButtonsTools"
import ColorSelector from './drawing_tools/ColorSelector'
import DrawingCanvas from "./drawing_tools/DrawingCanvas";
import ButtonsSizes from "./drawing_tools/ButtonsSizes"

export default function DrawingSpace() {
    const [currentColor, setColor] = useState("#ff0000");
    const [isDrawing, setIsDrawing] = useState(1);
    const [dimension, setDimensions] = useState(16);

    const handleDrawToggle = () => {
        setIsDrawing(1);
    }
    
    const handleEraseToggle = () => {
        setIsDrawing(2);
    }

    const handleDropToggle = () => {
        setIsDrawing(3);
    }

    const updateCurrentColor = (updateColor) => {
        setColor(updateColor);
    } 

    const updateSizes = (size) => {
        setDimensions(size);
    }

    return (
        <div className="drawing-space">

            <div className="left-side">
                <ColorSelector currentColor={currentColor} 
                    updateCurrentColor={updateCurrentColor}/>
                <ButtonsTools handleDrawToggle={handleDrawToggle} 
                    handleEraseToggle={handleEraseToggle} 
                    handleDropToggle={handleDropToggle} 
                    isDrawing={isDrawing}/>
            </div>
            <div className="right-side">
                <DrawingCanvas currentColor={currentColor} 
                    isDrawing={isDrawing} 
                    dimension={dimension} 
                    updateCurrentColor = {updateCurrentColor}/>
                
                <ButtonsSizes updateSizes={updateSizes}
                    dimension={dimension}
                />
            </div>
        </div>
    )
}