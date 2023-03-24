import './hero.scss'
import { FC, ReactNode } from 'react'

interface HeroProps {
  title: string
  img: { url: string; alt: string }
  actionSection: ReactNode
  subtitle?: string
}

export const Hero: FC<HeroProps> = ({ actionSection, img, title, subtitle }) => {
  return (
    <section className="hero">
      <div className="hero__main">
        <div className="hero__action">
          <h1 className="hero__title">{title}</h1>
          {subtitle && <p className="hero__description">{subtitle}</p>}
          {actionSection}
        </div>
        <div className="hero__image-container">
          <img src={img.url} alt={img.alt} className="hero__image" />
        </div>
      </div>
    </section>
  )
}
