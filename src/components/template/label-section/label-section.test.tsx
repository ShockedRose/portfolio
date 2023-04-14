import { render, screen } from '@testing-library/react'
import { LabelSection } from './label-section'

describe('Label Section template', () => {
  const props = {
    label: 'Test Label',
    labelPosition: 'left',
    children: <p>test section</p>
  } as const

  it('should render', () => {
    render(<LabelSection {...props} />)

    const label = screen.getByText('Test Label')

    expect(label).toBeInTheDocument()
  })
  it('should display the content', () => {
    render(<LabelSection {...props} />)

    const content = screen.getByText('test section')

    expect(content).toBeInTheDocument()
  })
  it('should put the label on the correct position', () => {
    render(<LabelSection {...props} labelPosition="right" />)

    const positionedLabel = screen.getByTestId('label-right')

    expect(positionedLabel).toBeInTheDocument()
  })
})
