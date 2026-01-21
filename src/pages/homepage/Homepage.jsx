import styles from './Homepage.module.css'

function Homepage() {

  return (
    <>
      <div className="titleDiv">
        <h1>BigWing's Portfolio Website</h1>
      </div>
      <div className={styles.rowContainer}>
        <div style={{"gridArea": "bio"}} className={`${styles.showcaseDiv} ${styles.gridContainer}`}>Helsdslo</div>
        <div style={{"gridArea": "image"}} className={styles.showcaseDiv}>Helsdslo</div>
        <div style={{"gridArea": "tech"}} className={styles.showcaseDiv}>Helsdslo</div>
        <div style={{"gridArea": "github"}} className={styles.showcaseDiv}>Helsdslo</div>
        <div style={{"gridArea": "links"}} className={styles.showcaseDiv}>Helsdslo</div>

      </div>
    </>
  )
}

export default Homepage
