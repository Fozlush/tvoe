import Image from 'next/image'
import styles from './episod.module.scss'

interface IEpisod {
  image: string,
  number: number,
  duration: string
}

const Episod = ({image, number, duration} : IEpisod) => {
  return (
    <div className={styles.episod}>
      <Image className={styles.image} src={image} alt='' width={544} height={306}/>
      <p className={styles.number}>{number} серия</p>
      <p className={styles.duration}>{duration}</p>
    </div>
  )
}

export default Episod