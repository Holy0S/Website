import Header from '../components/Header.jsx';
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
            </div>
        </>
    )
}

export default NotFoundPage;