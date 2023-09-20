import { useState, useEffect } from "react"

export default function DrawingCanvas(props) {
    const { currentColor, isDrawing, dimension, updateCurrentColor } = props;

    const [pixels, setPixels] = useState([]);

    useEffect(() => {
      setPixels(Array.from({ length: dimension }, () => Array(dimension).fill('white')));
    }, [dimension])

    const handlePixelClick = (row, col) => {
      const updatedPixels = [...pixels];
      if (isDrawing === 1) {  
        updatedPixels[row][col] = currentColor;
      } else if (isDrawing === 2) {
        updatedPixels[row][col] = "#ffffff";
      } else if (isDrawing === 3) {
        updateCurrentColor(updatedPixels[row][col]);
      }
      setPixels(updatedPixels);
    }

    const renderGrid = () => {
      return pixels.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((color, colIndex) => (
            <div
              key={colIndex}
              className="pixel"
              style={{
                width: `${dimension == 32?15:25}px`, // Adjust the size of the pixels as needed
                height: `${dimension == 32?15:25}px`, // Adjust the size of the pixels as needed
                backgroundColor: color,
              }}
              onMouseDown={() => handlePixelClick(rowIndex, colIndex)}
              onMouseEnter={(e) => {
                if (e.buttons === 1) {
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