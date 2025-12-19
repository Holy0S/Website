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
                <div className="contact-box">
                    <input type="text" placeholder="example@email.com"/>
                    <textarea placeholder="Message.."/>
                </div>
                </div>
                <Background/>
            </div>
        </>
    )
}

export default ContactPage;