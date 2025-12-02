import "../css/Header.css";
import AnimatedLink from "./AnimatedLink.jsx";

function Header() {
    return (
    <div className="header">
        <AnimatedLink text="Home" link="/"/>
        <AnimatedLink text="About" link="/about"/>
        <AnimatedLink text="Projects" link="/projects"/>
        <AnimatedLink text="Contact" link="/contact"/>
    </div>
    )
}

export default Header