import {Link} from "react-router-dom";
import "../css/AnimatedLink.css";

function AnimatedLink( {text, link} ) {
    return (
        <div className="animated-link-container">
            <Link to={link}>
                <div className="animated-link-text">
                    {text}
                </div>
            </Link>
        </div>
    )
}

export default AnimatedLink;