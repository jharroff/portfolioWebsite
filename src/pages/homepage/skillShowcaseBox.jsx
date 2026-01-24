import styles from './Homepage.module.css'

function SkillShowcaseBox({name}) {

  return (
    <>
      <div className={styles.skillIconContainer}>
        <img 
          className={styles.skillIcon}
          src={import.meta.env.BASE_URL + "skillsIcons/" + name + ".svg"}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src=import.meta.env.BASE_URL + "imageNotFound.svg";
          }}>
        </img>
        <span class={styles.tooltiptext}>{name}</span>
      </div>
    </>
  )
}

export default SkillShowcaseBox
