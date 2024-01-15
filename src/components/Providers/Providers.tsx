import { BrowserRouter } from 'react-router-dom'
import withLog from '../../hoc/withLog'
import { ProviderProps } from './Providers.type'

function Providers({ children }: ProviderProps) {
  return <BrowserRouter>{children}</BrowserRouter>
}

Providers.displayName = 'Provider'

export default withLog(Providers)
