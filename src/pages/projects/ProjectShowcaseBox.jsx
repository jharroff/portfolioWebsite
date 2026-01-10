import "./Projects.css";
function ProjectShowcaseBox({data}) {

  return (
    <>
      <a className="showcaseDiv" href={data.link} target="_blank">
        <img 
          className="showcaseProjectImage" 
          src={import.meta.env.BASE_URL + "projectImages/" + data.id + ".png"} 
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src=import.meta.env.BASE_URL + "imageNotFound.svg";
          }}>
        </img>
        <h2>{data.title}</h2>
        <p>{data.description}</p>
      </a>
    </>
  )
}

export default ProjectShowcaseBox
