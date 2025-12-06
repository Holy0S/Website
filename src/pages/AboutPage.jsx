import Header from '../components/Header.jsx';
import Background from "../components/Background.jsx";
import '../css/App.css';

function AboutPage() {
    return (
        <>
            <Header/>
            <div className="page-container">
                <div className="page">
                <h1>About Me</h1>
                <h2>Description of me</h2>
                </div>
                <Background/>
            </div>
        </>
    )
}

export default AboutPage;