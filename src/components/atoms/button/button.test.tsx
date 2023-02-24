import { fireEvent, render, screen } from '@testing-library/react'
import { Button } from './button'

describe('Button', () => {
  it('shoud render', () => {
    render(<Button text="test" />)

    const button = screen.getByText('test')

    expect(button).toBeInTheDocument()
  })
})
