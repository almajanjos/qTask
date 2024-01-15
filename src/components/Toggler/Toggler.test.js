import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Toggler from './Toggler' // Replace with the actual path

test('renders children without crashing', () => {
  render(
    <Toggler>{({ show }) => <div>{show ? 'Visible' : 'Hidden'}</div>}</Toggler>,
  )

  expect(screen.getByText('Hidden')).toBeInTheDocument()
})

test('toggles the visibility of children', () => {
  render(
    <Toggler>
      {({ show, toggle }) => (
        <div>
          <button onClick={toggle}>Toggle</button>
          {show ? 'Visible' : 'Hidden'}
        </div>
      )}
    </Toggler>,
  )

  const toggleButton = screen.getByText('Toggle')
  expect(screen.getByText('Hidden')).toBeInTheDocument()

  fireEvent.click(toggleButton)

  expect(screen.getByText('Visible')).toBeInTheDocument()
})

test('sets visibility to true when open is called', () => {
  render(
    <Toggler>
      {({ show, open }) => (
        <div>
          <button onClick={open}>Open</button>
          {show ? 'Visible' : 'Hidden'}
        </div>
      )}
    </Toggler>,
  )

  const openButton = screen.getByText('Open')
  expect(screen.getByText('Hidden')).toBeInTheDocument()

  fireEvent.click(openButton)

  expect(screen.getByText('Visible')).toBeInTheDocument()
})
