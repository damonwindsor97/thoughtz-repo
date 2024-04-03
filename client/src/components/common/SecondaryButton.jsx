import * as styles from './SecondaryButton.css'

function SecondaryButton({children, onClick}) {
  return (
    <button onClick={onClick} className={styles.SecondaryButton}>
        <div className={styles.ButtonContent}>
            {children}
        </div>
    </button>
  )
}

export default SecondaryButton