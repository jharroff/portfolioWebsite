import styles from './Homepage.module.css'
import ShowcaseBox from "./ShowcaseBox.jsx"
import links from "./links.json";

function Homepage() {

  return (
    <div style={{"margin": "25px"}}>
      <div className={styles.rowContainer}>
        <div style={{"gridArea": "bio"}} className={styles.showcaseDiv}>
          <div className={styles.gridContainer}>
            <h2 style={{"padding":"0px"}}>About Me</h2>
            <p className={styles.aboutText}>Hello! I'm Joshua Harroff, a current Purdue student and aspiring Software Engineer. I'm a full stack developer who enjoys exploring and learning new things. Outside of CS, I enjoy traveling, biking, playing board games, and random adventures.</p>
          </div>
        </div>
        <div style={{"gridArea": "image"}} className={styles.showcaseDiv}>
          <div className={styles.gridContainer}>
            <img className={styles.profileImage} src={import.meta.env.BASE_URL + "profilePic.JPG"}></img>
          </div>
        </div>
        <div style={{"gridArea": "tech"}} className={styles.showcaseDiv}>
          <div className={styles.gridContainer}>
            <h2>Skills</h2>
            <div className={styles.showcaseContainer}>
              {["Java", "Python", "Git", "C", "Godot", "Linux", "React"].map(p => (
                <ShowcaseBox 
                  name={p} 
                  imagePath={import.meta.env.BASE_URL + "skillsIcons/" + p + ".svg"} 
                  tooltip={true}/>
              ))}
            </div>
          </div>
        </div>
        <div style={{"gridArea": "github"}} className={styles.showcaseDiv}>
          <div className={styles.gridContainer}>
            <img className={styles.centerImage} src={import.meta.env.BASE_URL + "/favicon.png"}></img>
            <h2>Joshua Harroff</h2>
          </div>
        </div>
        <div style={{"gridArea": "links"}} className={styles.showcaseDiv}>
          <div className={styles.gridContainer}>
            <h2>Useful Links</h2>
            <div className={styles.showcaseContainer}>
              {links.map(link => (
                <ShowcaseBox 
                  name={link.name} 
                  imagePath={import.meta.env.BASE_URL + "linkIcons/" + link.name + ".svg"} 
                  link={link.link} 
                  tooltip={true}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
