import "./Projects.css";
function ProjectShowcaseBox({data}) {

  return (
    <>
      <a className="showcaseDiv" href={data.link} target="_blank">
        <img 
          className="showcaseProjectImage" 
          src={"src/assets/projectImages/" + data.id + ".png"} 
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src="src/assets/imageNotFound.svg";
          }}>
        </img>
        <h2>{data.title}</h2>
        <p>{data.description}</p>
      </a>
    </>
  )
}

export default ProjectShowcaseBox
