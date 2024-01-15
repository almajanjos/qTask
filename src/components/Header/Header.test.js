import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './Header' // Replace with the actual path

test('renders header with logo and link to posts', () => {
  render(
    <Router>
      <Header />
    </Router>,
  )

  // Check if the logo is rendered
  expect(screen.getByText('Q')).toBeInTheDocument()

  // Check if the link to 'Posts' is rendered
  const postsLink = screen.getByRole('link', { name: /Posts/i })
  expect(postsLink).toBeInTheDocument()

  // Check if the link has the correct destination
  expect(postsLink.getAttribute('href')).toBe('/posts')
})
