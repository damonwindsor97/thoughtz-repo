import * as styles from './TaProfileCard.css'

function TaProfileCard({children, largeCard}) {
  return (
    <div className={styles.cardContainer}>
        <div className={`${styles.defaultBox} ${largeCard ? styles.largeCard : styles.generalCard}`}>
          <div className={styles.cardChildren}>{children}</div>
        </div>
    </div>
  )
}

export default TaProfileCard