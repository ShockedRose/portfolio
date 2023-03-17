import './button.scss'
import { FC } from 'react'
import classNames from 'classnames'

interface ButtonProps {
  text: string
  type?: 'primary' | 'secondary'
  onClick: () => void
}

export const Button: FC<ButtonProps> = ({ text, type = 'primary', onClick }) => {
  const classes = classNames('button', {
    [`button--${type}`]: true
  })

  return (
    <button className={classes} onClick={onClick}>
      {text}
    </button>
  )
}
