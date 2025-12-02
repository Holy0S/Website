import "../css/Header.css";
import AnimatedLink from "./AnimatedLink.jsx";

function Header() {
    return (
    <div className="header">
        <AnimatedLink text="Home" link="/"/>
        <AnimatedLink text="Test" link="/test"/>
    </div>
    )
}

export default Header