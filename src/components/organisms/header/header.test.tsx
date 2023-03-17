import { render, screen } from '@testing-library/react'
import { Header } from './header'

describe('Hero template', () => {
  const props = {
    logo: { url: 'somewhere', alt: 'test logo' },
    links: [
      {
        text: 'Home',
        url: '#home'
      }
    ]
  }
  it('shoud render', () => {
    render(<Header {...props} />)

    const header = screen.getByAltText('test logo')

    expect(header).toBeInTheDocument()
  })

  it('shoud display the link options', () => {
    render(<Header {...props} />)

    const header = screen.getByText('Home')

    expect(header).toBeInTheDocument()
  })
})
