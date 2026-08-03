import ProjectShowcaseBox from "./ProjectShowcaseBox"
import projects from "./projects.json";
import styles from "./Projects.module.css";

function Projects() {

  return (
    <>
      <div className="titleDiv">
        <h1>Projects</h1>
      </div>
      <div className={styles.projectShowcaseContainer}>
        {projects.map((p, index) => (
          <ProjectShowcaseBox data={p} index={index}/>
        ))}
      </div>
    </>
  )
}

export default Projects
