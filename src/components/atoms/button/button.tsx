import './button.scss'
import { FC } from 'react'
import classNames from 'classnames'

interface ButtonProps {
  text: string
  type?: 'primary' | 'secondary'
}

export const Button: FC<ButtonProps> = ({ text, type = 'primary' }) => {
  const classes = classNames('button', {
    [`button--${type}`]: true
  })

  return <button className={classes}>{text}</button>
}
