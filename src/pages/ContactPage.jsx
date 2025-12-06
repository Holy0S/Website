import Header from '../components/Header.jsx';
import Background from "../components/Background.jsx";
import '../css/App.css';

function ContactPage() {
    return (
        <>
            <Header/>
            <div className="page-container">
                <div className="page">
                <h1>Contact Me</h1>
                <h2>Email Box Here</h2>
                </div>
                <Background/>
            </div>
        </>
    )
}

export default ContactPage;