import { render, screen } from '@testing-library/react'
import { Hero } from './hero'

describe('Hero template', () => {
  const props = {
    title: 'test title',
    img: { url: 'test url', alt: 'a test image' },
    actionSection: <button>a test button</button>,
    subtitle: 'test subtitle'
  }

  it('should render', () => {
    render(<Hero {...props} />)

    const heroTitle = screen.getByText(props.title)

    expect(heroTitle).toBeInTheDocument()
  })

  it('should display an action section', () => {
    render(<Hero {...props} />)

    const heroTitle = screen.getByRole('button', { name: 'a test button' })

    expect(heroTitle).toBeInTheDocument()
  })
})
