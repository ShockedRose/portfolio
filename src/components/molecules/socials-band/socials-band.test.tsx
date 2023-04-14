import { render, screen } from '@testing-library/react'
import { SocialsBand } from './socials-band'

describe('Socials Band molecule', () => {
  const props = {
    socials: [
      {
        name: 'github',
        logoUrl: 'logo.svg',
        url: 'https://github.com'
      }
    ]
  }

  it('should render', () => {
    render(<SocialsBand {...props} />)

    const githubLogo = screen.getByAltText('github logo')

    expect(githubLogo).toBeInTheDocument()
  })
})
