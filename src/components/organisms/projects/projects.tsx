import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import './projects.scss'
import { FC } from 'react'
import { Carousel } from 'react-responsive-carousel'
import { APP } from '../../../utils/constants/app-constant'
import { Button } from '../../atoms/button/button'

type Image = { imgUrl: string; description: string }

interface ProjectProps {
  title: string
  action: { title: string; command: () => void }
  projects: Image[]
}

export const Projects: FC<ProjectProps> = ({ title, action, projects }) => {
  return (
    <section className="projects">
      <div className="projects__content">
        <article className="projects__description">
          <h2 className="projects__title">{title}</h2>
          <p>{APP.PROJECTS.DESCRIPTION}</p>
          <div className="projects__action">
            <Button onClick={action.command} text={action.title} type="secondary" />
          </div>
        </article>
        <div className="projects__carousel">
          <Carousel showStatus={false} showThumbs={false} showIndicators={false}>
            {projects.map((project) => (
              <img src={project.imgUrl} alt={project.description} key={project.description} />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  )
}
