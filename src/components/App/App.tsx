import withLog from '../../hoc/withLog'
import Layout from '../Layout/Layout'
import Routes from '../Routes/Routes'

function App() {
  return (
    <Layout>
      <Routes />
    </Layout>
  )
}

App.displayName = 'App'

export default withLog(App)
