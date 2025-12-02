import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../css/Header.css";
import AnimatedLink from "./AnimatedLink.jsx";

function Header() {
    const location = useLocation();
    return (
    <div className="header">
        <AnimatedLink text="Home" link="/" highlight={location.pathname=="/"}/>
        <AnimatedLink text="About" link="/about" highlight={location.pathname=="/about"}/>
        <AnimatedLink text="Projects" link="/projects" highlight={location.pathname=="/projects"}/>
        <AnimatedLink text="Contact" link="/contact" highlight={location.pathname=="/contact"}/>
    </div>
    )
}

export default Header