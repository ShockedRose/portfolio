import './header.scss'
import { FC } from 'react'

interface HeaderProps {
  logo: {
    url: string
    alt: string
  }
  fixed?: boolean
  links: { text: string; url: string }[]
}

export const Header: FC<HeaderProps> = ({ logo, fixed = true, links }) => {
  return (
    <section className="header">
      <div className="header__content">
        <div className="header__logo-container">
          <img src={logo.url} alt={logo.alt} className="header__logo" />
        </div>
        <nav className="header__nav">
          <ul>
            {links.map((link) => (
              <li>
                <a href={link.url}>{link.text}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  )
}
