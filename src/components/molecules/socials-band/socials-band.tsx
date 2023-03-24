import './socials-band.scss'
import { FC } from 'react'
import { motion } from 'framer-motion'

interface Social {
  name: string
  logoUrl: string
  url: string
}

interface SocialsBandProps {
  socials: Social[]
}

export const SocialsBand: FC<SocialsBandProps> = ({ socials }) => {
  return (
    <section className="socials-band">
      <span className="socials-band__separator"></span>
      <address>
        <ul className="socials-band__logo-list">
          {socials.map((social) => (
            <li key={social.name} className="socials-band__logo-container">
              <a href={social.url} title={`Miguel's ${social.name} account link`}>
                <motion.img
                  whileHover={{ rotate: 360 }}
                  src={social.logoUrl}
                  alt={`${social.name} logo`}
                  className="socials-band__logo"
                />
              </a>
            </li>
          ))}
        </ul>
      </address>
      <span className="socials-band__separator"></span>
    </section>
  )
}
