import { render, screen } from '@testing-library/react'

import Auth from '.'

describe('', () => {
  it('should render the heading', () => {
    const { container } = render(<Auth />)

    expect(screen.getByRole('heading', { name: /Auth/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
