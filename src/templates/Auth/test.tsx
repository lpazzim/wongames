import { render, screen } from '@testing-library/react'

import Auth from '.'

describe('', () => {
  it('should render all components and children', () => {
    const { container } = render(
      <Auth title="Auth Title">
        <input type="text" />
      </Auth>
    )

    expect(screen.getByRole('heading', { name: /Auth/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
