import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";
import Button from "@/components/ui/button/Button";
import SerialCard from "@/components/ui/serialCard/SerialCard";
import { newTitles, topTitles } from "@/data/mock";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Image className={styles.background} src='/images/backgrounds/indiana.png' alt="" width={1250} height={800}/>
        <div className={styles.container}>
          <Image src='/images/titles/indiana.png' alt="" width={576} height={228}/>
          <p className={styles.header_text}>Неувядающий авантюрист и пытливый<br/>археолог-исследователь по‑прежнему в седле.</p>
          <div className={styles.buttons_block}>
            <Button text="Смотреть" colored={true}></Button>
            <Button text="О фильме" colored={false}></Button>
          </div>
        </div>
      </header>
      <section className={styles.sectionNew}>
        <h3>Новинки</h3>
        <div className={styles.newsList}>
          {newTitles.map((el) => {
            return (
              <SerialCard image={el.image} title={el.title} rating={el.rating} size="large"/>
            )
          })}
        </div>
      </section>
      <section className={styles.best_series_section}>
        <h3><span className={styles.stroke_text}>Топ-10 </span> просмотров за неделю</h3>
        <div className={styles.top_list}>
          {topTitles.map((el, i) => {
            return (
              <div className={styles.top_list__card}>
                <span className={styles.stroke_text}>{i + 1}</span>
                <Image className={styles.top_list__image} src={el.image} alt='' width={398} height={597}/>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
