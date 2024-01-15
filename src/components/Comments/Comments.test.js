import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect' // For extending Jest expectations
import Comments from './Comments' // Replace with the actual path

const mockComments = [
  { id: 1, email: 'user1@example.com', body: 'Comment 1' },
  { id: 2, email: 'user2@example.com', body: 'Comment 2' },
]

test('renders comments section with default comments', () => {
  render(<Comments postComments={mockComments} />)

  // Check if the "Show" button is rendered
  expect(screen.getByText('Show all comments')).toBeInTheDocument()

  // Check if the default comments are rendered (2 latest comments)
  expect(screen.getByText('user1@example.com')).toBeInTheDocument()
  expect(screen.getByText('user2@example.com')).toBeInTheDocument()
})

test('toggles comments visibility when clicking show/hide button', () => {
  render(<Comments postComments={mockComments} />)

  // Check if the "Show" button is initially rendered
  const showButton = screen.getByText('Show all comments')
  expect(showButton).toBeInTheDocument()

  // Click the "Show" button
  fireEvent.click(showButton)

  // Check if the "Hide" button is rendered after clicking "Show"
  expect(screen.getByText('Hide all comments')).toBeInTheDocument()

  // Click the "Hide" button
  fireEvent.click(screen.getByText('Hide all comments'))

  // Check if the "Show" button is rendered again after clicking "Hide"
  expect(screen.getByText('Show all comments')).toBeInTheDocument()
})

test('renders all comments when "Show" button is clicked', () => {
  render(<Comments postComments={mockComments} />)

  // Click the "Show" button
  fireEvent.click(screen.getByText('Show all comments'))

  // Check if all comments are rendered
  mockComments.forEach((comment) => {
    expect(screen.getByText(comment.email)).toBeInTheDocument()
  })
})

test('renders only the latest 2 comments when "Show all comments" button is not clicked', () => {
  render(<Comments postComments={mockComments} />)

  // Check if only the latest 2 comments are initially rendered
  expect(screen.getByText('user1@example.com')).toBeInTheDocument()
  expect(screen.getByText('user2@example.com')).toBeInTheDocument()

  // Check if other comments are not rendered
  expect(screen.queryByText('user3@example.com')).toBeNull()
})
