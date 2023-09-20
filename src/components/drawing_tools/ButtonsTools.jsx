import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, 
    faEraser, 
    faDroplet, 
    faDeleteLeft, 
    faFloppyDisk} from '@fortawesome/free-solid-svg-icons'

export default function ButtonsTools(props) {
    const {handleDrawToggle, handleEraseToggle} = props

    return (
        <div className="buttons-tools">
            <button><FontAwesomeIcon icon={faPencil} onClick={handleDrawToggle}/> Pencil</button>
            <button><FontAwesomeIcon icon={faEraser} onClick={handleEraseToggle}/> Eraser</button>
            
            <div className='config-buttons'>
                <button><FontAwesomeIcon icon={faDeleteLeft} /> Clear</button>
                <button><FontAwesomeIcon icon={faFloppyDisk} /> Save</button>
            </div>
        </div>
    )
}

//<button><FontAwesomeIcon icon={faDroplet} /> Fill</button>