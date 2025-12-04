import "../css/ProjectPreview.css"

function ProjectPreview( {title, description} ) {
    return(
        <div className="project-preview-container">
            <div className="project-preview-image"/>
            <div className="project-preview-title">
                {title}
            </div>
            <div className="project-preview-description">
                {description}
            </div>
        </div>
    )
}

export default ProjectPreview;