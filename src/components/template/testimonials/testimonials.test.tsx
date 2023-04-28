import { render, screen } from '@testing-library/react'
import { Testimonials } from './testimonials'

describe('Testimonials template', () => {
  const props = {}

  it('should render', () => {
    render(<Testimonials {...props} />)

    const title = screen.getByText('Testimonials')

    expect(title).toBeInTheDocument()
  })
})
