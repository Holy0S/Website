import Header from '../components/Header.jsx';
import Background from '../components/Background.jsx';
import ProjectPreview from '../components/ProjectPreview.jsx'
import "../css/HomePage.css";
import '../css/App.css';

function HomePage() {
    return (
        <>
            <Header/>
            <div className="page-container">
                <div className="page">
                    <h1>Hi- I'm Trevor</h1>
                    <h2>I'm a 3rd year computer science student at Oregon State University.</h2>
                    <h2>Latest Work</h2>
                    <div className="projects-container">
                        <ProjectPreview image="cat2.jpg" title="Recent Project 2" description="Recent Project 2"></ProjectPreview>
                        <ProjectPreview image="cat1.jpg" title="Recent Project 1" description="Recent Project 1"></ProjectPreview>
                        <ProjectPreview image="cat3.jpg" title="Recent Project 3" description="Recent Project 3"></ProjectPreview>
                    </div>
                </div>
                <Background/>
            </div>
        </>
    )
}

export default HomePage;