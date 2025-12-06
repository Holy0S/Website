import Header from '../components/Header.jsx';
import '../css/App.css';

function HomePage() {
    return (
        <>
            <Header/>
            <div className="page-container">
                <div className="page">
                <h1>Home</h1>
                <h2>Home page</h2>
                </div>
            </div>
        </>
    )
}

export default HomePage;