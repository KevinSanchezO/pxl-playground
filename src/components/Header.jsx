import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Header() {
    return (
        <div className="header">
            <div className="title">
                <h1>PXL PLAYGROUND</h1>

                <a className='header-github' href='https://github.com/KevinSanchezO/pxl-playground' target="_blank">
                    <p><FontAwesomeIcon icon={faGithub}/> Made by Kevin Sánchez</p>
                </a>
            </div>
        </div>
    )
}