import * as styles from './TaCard.css'

function TaCard({title, children, largeCard}) {
  return (
    <div className={styles.cardContainer}>
        <div className={`${styles.defaultBox} ${largeCard ? styles.largeCard : styles.generalCard}`}>
          <h2 className={styles.cardTitle}>{title}</h2>
          <div className={styles.cardChildren}>{children}</div>
        </div>
    </div>
  )
}

export default TaCard