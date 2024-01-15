import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import withLog from '../../hoc/withLog'

const Redirect = ({ to = '/posts' }) => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate(to, { replace: true })
  }, [navigate, to])

  return null // Redirect component doesn't render anything
}

Redirect.displayName = 'Redirect'

export default withLog(Redirect)
