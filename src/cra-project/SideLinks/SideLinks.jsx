import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SideLinks.css';


export default function SideLinks() {
    return (
        <div className="side-links">
            <a href="mailto:benedict.a.taguinod@gmail.com" className="icon"><FontAwesomeIcon icon={faEnvelope} /></a>
            <a href="https://github.com/btaguinod" className="icon"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://www.linkedin.com/in/benedict-taguinod/" className="icon"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href={'resume.pdf'} className="icon"><FontAwesomeIcon icon={faFileAlt} /></a>
        </div>
    )
}
