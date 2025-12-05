import "../css/ProjectPreview.css"

function ProjectPreview( {title, description, image, link} ) {
    console.log(image)
    return(
        <a href={link}>
            <div className="project-card-container">
                <div className="project-preview-card">
                    <img className="project-preview-image" src={image} alt={title}/>
                    <div className="project-preview-title">
                        {title}
                    </div>
                    <div className="project-preview-description">
                        {description}
                    </div>
                </div>
            </div>
        </a>
    )
}

export default ProjectPreview;