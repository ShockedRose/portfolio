import { render} from '@testing-library/react'
import { LabelSection } from './label-section'

describe('Label Section template', () => {
  const props = {}

  it('shoud render', () => {
    render(<LabelSection {...props} />)
  })
})
