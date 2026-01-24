import styles from './Homepage.module.css'

function ShowcaseBox({name, imagePath, link, tooltip}) {

  return (
    <>
      <a href={link}
         className={styles.skillIconContainer}
         target="_blank"
         >
        <img 
          className={styles.skillIcon}
          src={imagePath}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src=import.meta.env.BASE_URL + "imageNotFound.svg";
          }}>
        </img>
        {tooltip == true &&
          <span class={styles.tooltiptext}>{name}</span>
        }        
      </a>
    </>
  )
}

export default ShowcaseBox
