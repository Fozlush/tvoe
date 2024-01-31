import classNames from "classnames/bind"
import { ReactNode } from "react"
import styles from './button.module.scss'

const cx = classNames.bind(styles);

interface IButton {
  text: ReactNode,
  colored: boolean
}

const Button = ({text, colored} : IButton) => {
  return (
    <button className={cx('button', {colored: colored})}>{text}</button>
  )
}

export default Button