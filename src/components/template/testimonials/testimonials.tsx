import { APP } from '../../../utils/constants/app-constant'
import './testimonials.scss'
import { FC } from 'react'

interface TestimonialsProps {}

export const Testimonials: FC<TestimonialsProps> = ({}) => {
  return (
    <section className={'testimonials'}>
      <h2 className={'testimonials__title'}>{APP.TESTIMONIALS.TITLE}</h2>
    </section>
  )
}
