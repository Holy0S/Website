import Header from '../components/Header.jsx';
import ProjectPreview from '../components/ProjectPreview.jsx';
import "../css/ProjectPreview.css";
import projects from "../data/Projects.json";
import '../css/App.css';
import Background from "../components/Background.jsx";

function ProjectsPage() {
    return (
        <>
            <Header/>
            <div className="page-container">
                <div className="page">
                <h1>Projects</h1>
                <h2>List of projects with github links</h2>
                <div className="projects-container">
                    {projects.map((projects, i) => (
                        <ProjectPreview key={i} title={projects.title} description={projects.description} image={projects.image} link={projects.link}/>
                    ))}
                </div>
                </div>
                <Background/>
            </div>
        </>
    )
}

export default ProjectsPage;