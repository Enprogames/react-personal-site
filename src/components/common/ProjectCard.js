// components/common/ProjectCard.js
import { CodeBlock } from "react-code-blocks";

const ProjectCard = ({ title, elements, repositoryLink }) => {
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <h2 className="card-title">{title}</h2>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        {elements.map((element, index) => {
                            switch (element.type) {
                                case 'image':
                                    return <img key={index} src={element.content} alt={title} className="img-fluid" />
                                case 'keyPoints':
                                    return <ul key={index}>
                                        {element.content.map((point, i) => <li key={i}>{point}</li>)}
                                    </ul>
                                case 'description':
                                    return <p key={index} className="card-text">{element.content}</p>
                                case 'code':
                                    // Use element.language if code language is specified. Otherwise, show as plain text
                                    return <CodeBlock key={index} text={element.content} language={element.language || 'text'} showLineNumbers={false} theme={element.theme || 'dracula'} />
                                case 'technologies':
                                    return <p key={index} className="card-text">
                                        <small className="text-muted">Technologies used:</small>
                                        <ul>
                                            {element.content.map((tech, i) => <li key={i}>{tech}</li>)}
                                        </ul>
                                    </p>
                                default:
                                    return null;
                            }
                        })}
                        {repositoryLink && <a href={repositoryLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                            Repository
                        </a>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;
