import { render, screen } from '@testing-library/react'
import { ImageLine } from './image-line'

describe('Image Line Atom', () => {
  const props = {
    images: [
      {
        name: 'test image',
        url: 'nowhere'
      }
    ]
  }

  it('shoud render', () => {
    render(<ImageLine {...props} />)

    const testImage = screen.getByAltText('test image')

    expect(testImage).toBeInTheDocument()
  })
})
