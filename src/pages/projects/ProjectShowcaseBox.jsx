import "./Projects.css";
function ProjectShowcaseBox({data}) {

  return (
    <>
      <a class="showcaseDiv" href={data.link} target="_blank">
        <h2>{data.title}</h2>
        <p>{data.description}</p>
      </a>
    </>
  )
}

export default ProjectShowcaseBox
