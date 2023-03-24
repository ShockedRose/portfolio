import { render, screen } from '@testing-library/react'
import { AboutMe } from './about-me'

describe('About Me template', () => {
  const props = { subTitle: 'test subtitle' }

  it('shoud render', () => {
    render(<AboutMe {...props} />)

    const aboutMeTitle = screen.getByText('ABOUT ME')

    expect(aboutMeTitle).toBeInTheDocument()
  })

  it('shoud display a subtitle', () => {
    render(<AboutMe {...props} />)

    const aboutsubTitle = screen.getByText('test subtitle')

    expect(aboutsubTitle).toBeInTheDocument()
  })
})
