import Header from '../components/Header.jsx';
import Background from '../components/Background.jsx';
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
                <Background/>
            </div>
        </>
    )
}

export default HomePage;