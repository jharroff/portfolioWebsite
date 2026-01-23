import styles from './Homepage.module.css'

function Homepage() {

  return (
    <div style={{"margin": "25px"}}>
      <div className={styles.rowContainer}>
        <div style={{"gridArea": "bio"}} className={styles.showcaseDiv}>
          <div className={styles.gridContainer}>
            Helsdslo
          </div>
        </div>
        <div style={{"gridArea": "image"}} className={styles.showcaseDiv}>
          <div className={styles.gridContainer}>
            Helsdslo
          </div>
        </div>
        <div style={{"gridArea": "tech"}} className={styles.showcaseDiv}>
          <div className={styles.gridContainer}>
            Helsdslo
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
            Helsdslo
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
