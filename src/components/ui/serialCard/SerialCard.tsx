import classNames from "classnames/bind"
import Link from "next/link";
import Image from "next/image";
import styles from './serialCard.module.scss'

interface ISerialCard {
  image: string,
  rating: string,
  title?: string,
  size: 'large' | 'normal'
}

const cx = classNames.bind(styles);

const SerialCard = ({image, rating, title, size} : ISerialCard) => {
  const width = size === 'normal' ? 255 : 398
  const height = size === 'normal' ? 382 : 597
  return (
    <Link className={cx('serialCard', {large: size === 'large'})} href='/series'>
      <div className={styles.image_container}>
        <div className={styles.back}><Image className={styles.image} src={image} alt="" width={width} height={height}/></div>
      </div>
      <div className={styles.rating}>{rating}</div>
      {title && <span className={styles.title}>{title}</span>}
    </Link>
  )
}

export default SerialCard