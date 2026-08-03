import styles from "./Projects.module.css";
function ProjectShowcaseBox({data, index}) {


  return (
  <div className={styles.showcaseDivEntry} style={{'--animationDelay': `${index * 0.1}s`}}>
    <div className={styles.showcaseDiv}>
        <a href={data.link} target="_blank">
          <img 
            className={styles.showcaseProjectImage} 
            src={import.meta.env.BASE_URL + "projectImages/" + data.id + ".png"} 
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src=import.meta.env.BASE_URL + "imageNotFound.svg";
            }}>
          </img>
          <h2>{data.title}</h2>
          <div className={styles.skillTagContainer}>
          {data.skills && data.skills.map((skill, index) => (
            <span key={index} className={styles.skillTag}>
              {skill}
            </span>
          ))}
          </div>
          <p>{data.description}</p>
        </a>
      </div>
    </div>
  )
}

export default ProjectShowcaseBox
