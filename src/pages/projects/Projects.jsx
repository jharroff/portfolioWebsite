import ProjectShowcaseBox from "./ProjectShowcaseBox"
import projects from "./projects.json";

function Projects() {

  return (
    <>
      <div className="titleDiv">
        <h1>Projects</h1>
        {projects.map(p => (
          <ProjectShowcaseBox data={p} />
        ))}
      </div>
    </>
  )
}

export default Projects
