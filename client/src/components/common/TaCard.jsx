import * as styles from './TaCard.css'

function TaCard({title, children, smallCard}) {
  return (
    <div className={styles.cardContainer}>
        <div className={`${styles.defaultBox} ${smallCard ? styles.smallCard : styles.generalCard}`}>
          <h2 className={styles.cardTitle}>{title}</h2>
          <div className={styles.cardChildren}>{children}</div>
        </div>
    </div>
  )
}

export default TaCard