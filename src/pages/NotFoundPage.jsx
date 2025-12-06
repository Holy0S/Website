import Header from '../components/Header.jsx';
import Background from "../components/Background.jsx";
import '../css/App.css';
function NotFoundPage() {
    return (
        <>
            <Header/>
            <div className="page-container">
                <div className="page">
                    <h1>404</h1>
                    <h2>Page not found...</h2>
                </div>
                <Background/>
            </div>
        </>
    )
}

export default NotFoundPage;