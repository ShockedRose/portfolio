import './header.scss'
import { FC } from 'react'
import classNames from 'classnames'

interface HeaderProps {
  logo: {
    url: string
    alt: string
  }
  fixed?: boolean
  links: { text: string; url: string }[]
}

export const Header: FC<HeaderProps> = ({ logo, fixed = true, links }) => {
  const headerClasses = classNames('header', {
    'header--fixed': fixed
  })

  return (
    <section className={headerClasses}>
      <div className="header__content">
        <div className="header__logo-container">
          <img src={logo.url} alt={logo.alt} className="header__logo" />
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            {links.map((link) => (
              <li key={link.text}>
                <a className="header__nav-link">{link.text}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  )
}
