"use client";

import Link from 'next/link'
import Image from 'next/image'
import styles from './menu.module.scss'

function Menu(){
  const scroll = () => {
    document.documentElement.scrollTop = 0;
  }

  return (
    <menu className={styles.menu}>
      <Link href='/'><Image src='/images/icons/logo.svg' alt='' width={50} height={50}/></Link>
      <ul className={styles.list}>
        <li><Link href='#'><Image src='/images/icons/search.svg' alt='' width={44} height={44}/></Link></li>
        <li><Link href='#'><Image src='/images/icons/home.svg' alt='' width={44} height={44}/></Link></li>
        <li><Link href='#'><Image src='/images/icons/movies.svg' alt='' width={44} height={44}/></Link></li>
        <li><Link href='#'><Image src='/images/icons/tv.svg' alt='' width={44} height={44}/></Link></li>
        <li><Link href='#'><Image src='/images/icons/like.svg' alt='' width={44} height={44}/></Link></li>
        <li><Link href='#'><Image src='/images/icons/person.svg' alt='' width={44} height={44}/></Link></li>
      </ul>
      <button onClick={scroll} className={styles.arrow}><Image src='/images/icons/arrow_up.svg' alt='' width={50} height={50}/></button>
    </menu>
  )
}

export default Menu