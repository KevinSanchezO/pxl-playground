import { useState } from "react"

export default function DrawingCanvas(props) {
    const { currentColor, isDrawing, dimension } = props;

    const [pixels, setPixels] = useState(Array.from({length: dimension}, ()=>Array(dimension).fill('white')));

    const handlePixelClick = (row, col) => {
        if (isDrawing) {
            const updatedPixels = [...pixels];
            updatedPixels[row][col] = currentColor;
            setPixels(updatedPixels);
        }
    }

    const renderGrid = () => {
        return pixels.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((color, colIndex) => (
              <div
                key={colIndex}
                className="pixel"
                style={{ backgroundColor: color }}
                onMouseEnter={(e) => { 
                    if (isDrawing && e.buttons === 1) {
                        handlePixelClick(rowIndex, colIndex);
                    }
                }}
              ></div>
            ))}
          </div>
        ));
      };

    return (
        <div className="canvas">
        {renderGrid()}
        </div>
    );
}