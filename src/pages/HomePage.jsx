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
                        <ProjectPreview image="cat1.jpg"></ProjectPreview>
                        <ProjectPreview image="cat2.jpg"></ProjectPreview>
                        <ProjectPreview image="cat3.jpg"></ProjectPreview>
                    </div>
                </div>
                <Background/>
            </div>
        </>
    )
}

export default HomePage;