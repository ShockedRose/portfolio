import './about-me.scss'
import { FC } from 'react'
import { APP } from '../../../utils/constants/app-constant'
import { ImageLine } from '../../atoms/image-line/image-line'
import Lambda from '../../../assets/images/tech-images/aws-lambda.png'
import Ts from '../../../assets/images/tech-images/ts-logo.png'
import Figma from '../../../assets/images/tech-images/figma-logo.svg'

interface AboutMeProps {
  subTitle: string
  description: React.ReactNode
}

export const AboutMe: FC<AboutMeProps> = ({ subTitle, description }) => {
  const images = [
    {
      name: 'aws lambda logo',
      url: Lambda
    },
    {
      name: 'typescript logo',
      url: Ts
    },
    {
      name: 'Figma logo',
      url: Figma
    }
  ]

  return (
    <section className="about-me">
      <div className="about-me__content">
        <section className="about-me__info-section">
          <h2 className="about-me__title">{APP.ABOUT_ME.TITLE}</h2>
          <h3 className="about-me__sub-title">{subTitle}</h3>
          <div className="about-me__description">{description}</div>
        </section>
        <div>
          <ImageLine images={images} />
        </div>
      </div>
    </section>
  )
}
