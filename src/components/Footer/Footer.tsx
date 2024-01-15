import withLog from '../../hoc/withLog'
import styles from './styles.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div>Q agency task</div>
      <div>Developed by AJ</div>
      <div>Jan 2024</div>
    </footer>
  )
}

Footer.displayName = 'Footer'

export default withLog(Footer)
