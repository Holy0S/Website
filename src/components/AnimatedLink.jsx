import { Link } from "react-router-dom";
import "../css/AnimatedLink.css";
import { useRef } from "react";

function AnimatedLink( {text, link, highlight} ) {
    return (
        <div className="animated-link-container">
            <Link to={link}>
                <div className={highlight ? "animated-link-text-active" : "animated-link-text"}>
                    {text}
                </div>
                <div className={highlight ? "animated-link-underline-active" : "animated-link-underline"}/>
            </Link>
        </div>
    )
}

export default AnimatedLink;