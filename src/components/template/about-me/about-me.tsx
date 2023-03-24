import './about-me.scss'
import { FC } from 'react'
import { APP } from '../../../utils/constants/app-constant'

interface AboutMeProps {
  subTitle: string
}

export const AboutMe: FC<AboutMeProps> = ({ subTitle }) => {
  return (
    <section className="about-me">
      <h2>{APP.ABOUT_ME.TITLE}</h2>
      <h3>{subTitle}</h3>
    </section>
  )
}
