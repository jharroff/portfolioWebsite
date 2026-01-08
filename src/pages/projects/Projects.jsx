import ProjectShowcaseBox from "./ProjectShowcaseBox"
import projects from "./projects.json";
import "./Projects.css";

function Projects() {

  return (
    <>
      <div className="titleDiv">
        <h1>Projects</h1>
      </div>
      <div className="projectShowcaseContainer">
        {projects.map(p => (
          <ProjectShowcaseBox data={p} />
        ))}
      </div>
    </>
  )
}

export default Projects
