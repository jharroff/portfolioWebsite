import "./Projects.css";
function ProjectShowcaseBox({data}) {

  return (
    <>
      <div class="showcaseDiv">
        <h2>{data.title}</h2>
        <p>{data.description}</p>
      </div>
    </>
  )
}

export default ProjectShowcaseBox
