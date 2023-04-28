import { render, screen } from '@testing-library/react'
import { Card } from './card'

describe('Card atom', () => {
  const props = { children: <p>test child</p> }

  it('should render', () => {
    render(<Card {...props} />)

    const childNode = screen.getByText('test child')

    expect(childNode).toBeInTheDocument()
  })
})
