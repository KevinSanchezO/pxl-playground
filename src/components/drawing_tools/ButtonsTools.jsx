import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, 
    faEraser, 
    faDroplet, 
    faDeleteLeft, 
    faFloppyDisk} from '@fortawesome/free-solid-svg-icons'

export default function ButtonsTools() {
    return (
        <div className="buttons-tools">
            <button><FontAwesomeIcon icon={faPencil} /> Pencil</button>
            <button><FontAwesomeIcon icon={faEraser} /> Eraser</button>
            <button><FontAwesomeIcon icon={faDroplet} /> Fill</button>
            <div className='config-buttons'>
                <button><FontAwesomeIcon icon={faDeleteLeft} /> Clear</button>
                <button><FontAwesomeIcon icon={faFloppyDisk} /> Save</button>
            </div>
        </div>
    )
}