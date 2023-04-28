import './home.scss'
import { FC } from 'react'
import { Hero } from '../../template/hero/hero'
import { Button } from '../../atoms/button/button'
import { SocialsBand } from '../../molecules/socials-band/socials-band'
import { APP } from '../../../utils/constants/app-constant'
import { SOCIALS } from '../../../utils/constants/socials-constant'
import heroImage from '../../../assets/images/hero-image.svg'
import { AboutMe } from '../../template/about-me/about-me'
import { ActionDescription } from '../../molecules/action-description/action-description'
import { LabelSection } from '../../template/label-section/label-section'
import { Projects } from '../../organisms/projects/projects'
import { projects } from '../../../utils/constants/projects-constant'
import { Testimonials } from '../../template/testimonials/testimonials'
import { testimonials } from '../../../utils/constants/testimonials-constant'

export const HomePage: FC = () => {
  return (
    <main className="home">
      <Hero
        title={APP.TITLE}
        subtitle={APP.SUB_TITLE}
        img={{ url: heroImage, alt: 'Hero vector image of a screen' }}
        actionSection={
          <div className="w-half">
            <Button text="READ MORE" type="secondary" onClick={() => {}} />
          </div>
        }
      />
      <SocialsBand socials={SOCIALS} />
      <div className="home__bordered-section">
        <AboutMe
          subTitle={APP.ABOUT_ME.SUB_TITLE}
          description={
            <ActionDescription
              text={APP.ABOUT_ME.DESCRIPTION}
              primaryAction={{ title: 'Contact me', command: () => {} }}
              secondaryAction={{ title: 'More about me', command: () => {} }}
            />
          }
        />
        <LabelSection label={APP.PROJECTS.TITLE} labelPosition="left">
          <Projects
            title={APP.PROJECTS.TITLE}
            action={{ title: APP.PROJECTS.ACTION, command: () => {} }}
            projects={projects}
          />
        </LabelSection>
        <Testimonials description={APP.TESTIMONIALS.DESCRIPTION} testimonials={testimonials} />
      </div>
    </main>
  )
}
