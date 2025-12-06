import Header from '../components/Header.jsx';
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
            </div>
        </>
    )
}

export default AboutPage;