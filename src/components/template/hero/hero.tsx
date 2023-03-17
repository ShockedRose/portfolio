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
          <h1>{title}</h1>
          {subtitle && <p>{subtitle}</p>}
          {actionSection}
        </div>
        <div className="hero__image">
          <img src={img.url} alt={img.alt} />
        </div>
      </div>
    </section>
  )
}
