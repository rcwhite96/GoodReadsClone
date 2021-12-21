import{ Link } from 'react-router-dom'
import './Footer.css'

export default function Footer(){
    return(
        <div className="footer">
            <div className="links">By: Rachel White</div>
            <Link to="https://github.com/rcwhite96" className="links">Github</Link>
            <Link to="https://www.linkedin.com/in/rachel-white-419370156/" className="links">LinkedIn</Link>
        </div>
    )
}
