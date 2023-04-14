import { fireEvent, render, screen } from '@testing-library/react'
import { ActionDescription } from './action-description'

describe('Action Description molecule', () => {
  const props = {
    text: 'huge test description',
    primaryAction: { title: 'primary', command: jest.fn() },
    secondaryAction: { title: 'secondary', command: jest.fn() }
  }

  it('should render', () => {
    render(<ActionDescription {...props} />)

    const actionDescription = screen.getByText('huge test description')

    expect(actionDescription).toBeInTheDocument()
  })

  it('should have both primary and secondary actions', () => {
    render(<ActionDescription {...props} />)

    const primaryButton = screen.getByText('primary')
    const secondaryButton = screen.getByText('secondary')

    fireEvent.click(primaryButton)
    fireEvent.click(secondaryButton)

    expect(props.primaryAction.command).toHaveBeenCalled()
    expect(props.secondaryAction.command).toHaveBeenCalled()
  })
})
