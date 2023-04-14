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

  it('should render', () => {
    render(<ImageLine {...props} />)

    const testImage = screen.getByAltText('test image')

    expect(testImage).toBeInTheDocument()
  })
  it('should display a message when no images are passed', () => {
    render(<ImageLine images={[]} />)

    const defaultText = screen.getByText('No Images')

    expect(defaultText).toBeInTheDocument()
  })
})
