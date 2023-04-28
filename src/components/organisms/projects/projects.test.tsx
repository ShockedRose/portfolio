import { render, screen } from '@testing-library/react'
import { Projects } from './projects'
import userEvent from '@testing-library/user-event'

describe('Projects organism', () => {
  const props = {
    title: 'project test',
    action: { title: 'See Projects', command: jest.fn() },
    projects: [{ imgUrl: 'test url', description: 'a test alt text' }]
  }

  it('should render', () => {
    render(<Projects {...props} />)

    const projectsTitle = screen.getByText('project test')

    expect(projectsTitle).toBeInTheDocument()
  })

  it('should execute the action on click', () => {
    render(<Projects {...props} />)

    const projectsButton = screen.getByRole('button', { name: 'See Projects' })

    expect(props.action.command).toHaveBeenCalledTimes(0)

    userEvent.click(projectsButton)

    expect(props.action.command).toHaveBeenCalledTimes(1)
  })

  it('should display the project images with a carousel', () => {
    render(<Projects {...props} />)

    const projectImage = screen.getByAltText('a test alt text')

    expect(projectImage).toBeInTheDocument()
  })
})
