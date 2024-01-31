"use client";

import classNames from "classnames/bind"
import { useState } from "react";
import styles from "./page.module.scss";
import Image from "next/image";
import bg from '/public/images/backgrounds/yensday.png'
import Button from "@/components/ui/button/Button";
import Episod from "@/components/ui/episod/Episod";
import SerialCard from "@/components/ui/serialCard/SerialCard";
import { seasons, similarTitles } from "@/data/mock";

const cx = classNames.bind(styles);

function SeriasPage(){
  const [ active, setActive ] = useState(0);

  const openTab = (e: React.BaseSyntheticEvent) => setActive(+e.target.dataset.index);

  return (
    <div className={styles.page}>
      <header className={styles.header} style={{backgroundImage: `url(${bg.src})`,}}>
        <Image src={'/images/titles/yensday.svg'} width={367} height={132} alt=""/>
        <div className={styles.params}>
          <span className={styles.params_rating}>10</span>
          <span>2022 - ...</span>
          <span>1 сезон</span>
          <span>США</span>
          <span>Ужасы</span>
          <span>0+</span>
        </div>
        <div className={styles.header_description}>Уэнсдэй предстоит освоить экстрасенсорные cпособности, чтобы остановить местного серийного убийцу и раскрыть тайну родителей.</div>
        <div className={styles.block_buttons}>
          <Button text="Смотреть" colored={true}/>
          <Button text="Трейлер" colored={false}/>
          <Button text={<Image src={'/images/icons/like.svg'} alt='' width={32} height={32}/>} colored={false}/>
          <Button text={<Image src={'/images/icons/flag.svg'} alt='' width={32} height={32}/>} colored={false}/>
        </div>
      </header>
      <section className={styles.seasons}>
        <div className={styles.seasons_tabs}>
          <h3>Сезоны</h3>
          <div className={styles.tab_block}>
            {seasons.map((el, i) => (
              <button
                className={cx('tablinks', {active: i === active})}
                onClick={openTab}
                data-index={i}
              >{i + 1}</button>
            ))}
          </div>
        </div>
        <div className={styles.seasons_series}>
          {seasons[active] && seasons[active].map((el, i) => {
            return (
              <Episod image={el.image} duration={el.duration} number={i + 1}/>
            )
          })}
        </div>
      </section>
      <section className={styles.description}>
        <h3>Описание</h3>
        <p className={styles.description_text}>Детективная история, наполненная сверхъестественными силами. Главная героиня сериала — Уэнздей Аддамс, одна из членов семейки Аддамс и единственная дочь Гомеса и Мортиши Аддамсов, которая становится студенткой академии «Невермор». Она пытается овладеть своими проявившимися экстрасенсорными способностями, помешать чудовищным убийствам монстра, что терроризирует местный городок Джерико, а также разгадать тайну, в которую были втянуты её родители 32 года назад, — и всё это на фоне её новых и очень запутанных отношений в академии.</p>
        <div className={styles.description_notice}>
          <Image src={'/images/icons/icon-park-outline_attention.svg'} alt='' width={48} height={48}/>
          <p>Контент может содержать сцены курения и употребления спиртных напитков. Курение и чрезмерное употребление алкоголя вредит вашему здоровью.</p>
        </div>
      </section>
      <section className={styles.similar}>
        <h3>Похожее</h3>
        <div className={styles.similar_films}>
          {similarTitles.map((el) => {
            return (
              <SerialCard image={el.image} rating={el.rating} size="normal"/>
            )
          })}
        </div>
      </section>
      <footer className={styles.footer}>
        <h3>Информация</h3>
        <div className={styles.grid}>
          <div className={styles.grid_item}>
            <p className={styles.grid_item__title}>Премьера в мире</p>
            <p className={styles.grid_item__text}>31 октября 2022</p>
          </div>
          <div className={styles.grid_item}>
            <p className={styles.grid_item__title}>Страна</p>
            <p className={styles.grid_item__text}>США</p>
          </div>
          <div className={styles.grid_item}>
            <p className={styles.grid_item__title}>Язык аудиодорожки</p>
            <p className={styles.grid_item__text}>Rus, Eng</p>
          </div>
          <div className={styles.grid_item}>
            <p className={styles.grid_item__title}>Оригинальное название</p>
            <p className={styles.grid_item__text}>Wednesday</p>
          </div>
          <div className={styles.grid_item}>
            <p className={styles.grid_item__title}>Жанры</p>
            <p className={styles.grid_item__text}>Фэнтэзи&emsp;Комедия&emsp;Криминал&emsp;Детектив</p>
          </div>
          <div className={styles.grid_item}>
            <p className={styles.grid_item__title}>Качество</p>
            <p className={styles.grid_item__text}><span className={styles.quality}>Full HD</span></p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default SeriasPage