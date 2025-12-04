import Header from '../components/Header.jsx';
import "../css/ProjectPreview.css";
import ProjectPreview from '../components/ProjectPreview.jsx';

function ProjectsPage() {
    return (
        <>
            <Header/>
            <h1>Projects</h1>
            <h2>List of projects with github links</h2>
            <div className="projects-container">
                <ProjectPreview title="Test" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                <ProjectPreview title="Test" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                <ProjectPreview title="Test" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                
            </div>
        </>
    )
}

export default ProjectsPage;