import { render, screen } from '@testing-library/react'
import { Testimonials } from './testimonials'

describe('Testimonials template', () => {
  const props = {
    description: 'a test description',
    testimonials: [
      {
        name: 'john doe',
        text: 'he was responsible'
      }
    ]
  }

  it('should render', () => {
    render(<Testimonials {...props} />)

    const title = screen.getByText('Testimonials')

    expect(title).toBeInTheDocument()
  })

  it('should display a description', () => {
    render(<Testimonials {...props} />)

    const description = screen.getByText('a test description')

    expect(description).toBeInTheDocument()
  })

  it('should display a testimonial card', () => {
    render(<Testimonials {...props} />)

    const testimonial = screen.getByText('he was responsible')

    expect(testimonial).toBeInTheDocument()
  })
})
