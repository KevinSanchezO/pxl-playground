import { useState } from "react"

import ButtonsTools from "./drawing_tools/ButtonsTools"
import ColorSelector from './drawing_tools/ColorSelector'

export default function DrawingSpace() {
    const [currentColor, setColor] = useState("#fff");
    const [dimension, setDimensions] = useState(16);

    return (
        <div className="drawing-space">
            <div className="left-side">
                <ColorSelector currentColor={currentColor} 
                                setColor={setColor}/>
                <ButtonsTools />
            </div>
            <div className="right-side">
                
            </div>
        </div>
    )
}