import './card.scss'
import { FC } from 'react'

export const Card: FC = ({ children }) => {
  return <div className={'card'}>{children}</div>
}
