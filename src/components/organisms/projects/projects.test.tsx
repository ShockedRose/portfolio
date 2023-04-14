import { render, screen } from '@testing-library/react'
import { Projects } from './projects'

describe('Projects organism', () => {
  const props = {
    title: 'project test'
  }
  it('should render', () => {
    render(<Projects {...props} />)

    const projectsTitle = screen.getByText('project test')

    expect(projectsTitle).toBeInTheDocument()
  })
})
