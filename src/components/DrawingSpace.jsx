import { useState, useRef } from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFloppyDisk} from '@fortawesome/free-solid-svg-icons'
import html2canvas from 'html2canvas';

import ButtonsTools from "./drawing_tools/ButtonsTools"
import ColorSelector from './drawing_tools/ColorSelector'
import DrawingCanvas from "./drawing_tools/DrawingCanvas";
import ButtonsSizes from "./drawing_tools/ButtonsSizes"

export default function DrawingSpace() {
    const [currentColor, setColor] = useState("#ff0000");
    const [isDrawing, setIsDrawing] = useState(1);
    const [dimension, setDimensions] = useState(16);

    const printRef = useRef();

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

    const handleDownloadImage = async () => {
        const element = printRef.current;
        const canvas = await html2canvas(element);

        const data = canvas.toDataURL('image/jpg');
        const link = document.createElement('a');

        if (typeof link.download === 'string') {
        link.href = data;
        link.download = 'image.jpg';

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        } else {
        window.open(data);
        }
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
                <button type="button" onClick={handleDownloadImage}><FontAwesomeIcon icon={faFloppyDisk} /> Save</button>
            </div>
            <div className="right-side">
                <div ref={printRef}>
                <DrawingCanvas currentColor={currentColor} 
                    isDrawing={isDrawing} 
                    dimension={dimension} 
                    updateCurrentColor = {updateCurrentColor}/>
                </div>
                <ButtonsSizes updateSizes={updateSizes}
                    dimension={dimension}
                />
            </div>
        </div>
    )
}