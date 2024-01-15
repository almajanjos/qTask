import { Link } from 'react-router-dom'
import withLog from '../../hoc/withLog'
import styles from './styles.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Q</div>
      <Link to='/posts' className={styles.link}>
        Posts
      </Link>
    </header>
  )
}

Header.displayName = 'Header'

export default withLog(Header)
