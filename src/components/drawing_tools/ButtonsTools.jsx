import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, 
    faEraser, 
    faDroplet, 
    faDeleteLeft,
    faEyeDropper} from '@fortawesome/free-solid-svg-icons'

export default function ButtonsTools(props) {
    const {handleDrawToggle, 
        handleEraseToggle, 
        handleDropToggle, 
        isDrawing} = props

    return (
        <div className="buttons-tools">
            <button onClick={handleDrawToggle}
            style={{
                borderColor: isDrawing === 1 && '#646cff',
                borderWidth: isDrawing === 1 ? '2px' : 'initial',
            }}>
                <FontAwesomeIcon icon={faPencil}/> Pencil
            </button>
            
            <button onClick={handleEraseToggle} 
            style={{
                borderColor: isDrawing === 2 && '#646cff',
                borderWidth: isDrawing === 2 ? '2px' : 'initial',
              }}>
                <FontAwesomeIcon icon={faEraser}/> Eraser
            </button>

            <button onClick={handleDropToggle}
                style={{
                    borderColor: isDrawing === 3 && '#646cff',
                    borderWidth: isDrawing === 3 ? '2px' : 'initial',
            }}>
                <FontAwesomeIcon icon={faEyeDropper}/> Eyedropper
            </button>
        </div>
    )
}

//<button><FontAwesomeIcon icon={faDroplet} /> Fill</button>
//<button><FontAwesomeIcon icon={faDeleteLeft} /> Clear</button>
//border-color: #646cff