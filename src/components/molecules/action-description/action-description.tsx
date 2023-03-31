import './action-description.scss'
import { FC } from 'react'
import { motion } from 'framer-motion'
import { Button } from '../../atoms/button/button'

interface ActionDescriptionProps {
  text: string
  primaryAction: { title: string; command: () => void }
  secondaryAction: { title: string; command: () => void }
}

export const ActionDescription: FC<ActionDescriptionProps> = ({
  primaryAction,
  secondaryAction,
  text
}) => {
  return (
    <section className="action-description">
      <p>{text}</p>
      <div className="action-description__button-group">
        <div className="action-description__button">
          <Button
            onClick={primaryAction.command}
            text={primaryAction.title}
            type="secondary"
          ></Button>
        </div>
        <div className="action-description__button">
          <Button onClick={secondaryAction.command} text={secondaryAction.title}></Button>
        </div>
      </div>
    </section>
  )
}
