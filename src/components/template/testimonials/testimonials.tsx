import './testimonials.scss'
import { APP } from '../../../utils/constants/app-constant'
import { Card } from '../../atoms/card/card'

type Testimonial = { name: string; text: string }

interface TestimonialsProps {
  description: string
  testimonials: Testimonial[]
}

export const Testimonials = ({ description, testimonials }: TestimonialsProps) => {
  return (
    <section className={'testimonials'}>
      <h2 className={'testimonials__title'}>{APP.TESTIMONIALS.TITLE}</h2>
      <p className={'testimonials__description'}>{description}</p>
      <section className="testimonials__container">
        {testimonials.map((testimonial) => (
          <article className="testimonials__testimonial" key={testimonial.text}>
            <Card>
              <h3 className={'testimonials__author'}>{testimonial.name}</h3>
              <p className={'testimonials__text'}>{testimonial.text}</p>
            </Card>
          </article>
        ))}
      </section>
    </section>
  )
}
