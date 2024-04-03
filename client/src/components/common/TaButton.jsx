import * as styles from './TaButton.css'



function TaButton({content, onClick}) {
  return (
    <button onClick={onClick}  className={styles.Button}>{content}</button>
  )
}

export default TaButton