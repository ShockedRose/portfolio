import { render } from '@testing-library/react'
import { HomePage } from './home'

describe('HomePage suite', () => {
  it('should render', () => {
    render(<HomePage />)
  })
})
