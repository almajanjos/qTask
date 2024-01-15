## Available Scripts

In the project directory, you can run:

### How to run project ?

1. Clone the project
2. Run `npm install`
3. Run `npm start`
4. Open`localhost:3000` in browser

### How to run tests ?

1. Run `npm test`

## About project implementation

### Code Splitting

Implemented in Routes component. Both routes are lazy loaded. For routing was used React Router v6

### Patterns

Created two HOC-s (withDataFetch, withLog)
withDataFetch is responsible for fetching the data from the API
withLog is responsible for logging message "Hello from Component"

Used Render Props pattern in Toggler

### Tests

Written for components: Header, Comments, Toggler

### CSS

For CSS I did not use any 3th party solutions but CSS modules
