import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from './button'

describe('Button Atom', () => {
  const props = {
    text: 'test',
    onClick: jest.fn()
  }

  it('should render', () => {
    render(<Button {...props} />)

    const button = screen.getByRole('button', { name: props.text })

    expect(button).toBeInTheDocument()
  })

  it('should handle a click action', () => {
    render(<Button {...props} />)

    const button = screen.getByRole('button', { name: props.text })

    expect(props.onClick).toHaveBeenCalledTimes(0)

    userEvent.click(button)

    expect(props.onClick).toHaveBeenCalledTimes(1)
  })
})
