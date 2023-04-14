import { APP } from '../../../utils/constants/app-constant'
import { Button } from '../../atoms/button/button'
import './projects.scss'
import { FC } from 'react'

interface ProjectProps {
  title: string
}

export const Projects: FC<ProjectProps> = ({ title }) => {
  return (
    <section className="projects">
      <div className="projects__content">
        <article className="projects_description">
          <h2 className="projects__title">{title}</h2>
          <p>{APP.PROJECTS.DESCRIPTION}</p>
          <div className="projects__action">
            <Button onClick={() => {}} text={APP.PROJECTS.ACTION} type="secondary" />
          </div>
        </article>
        <div className="projects_carousel"></div>
      </div>
    </section>
  )
}
