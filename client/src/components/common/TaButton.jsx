import * as styles from './TaButton.css'



function TaButton({content}) {
  return (
    <button className={styles.Button}>{content}</button>
  )
}

export default TaButton