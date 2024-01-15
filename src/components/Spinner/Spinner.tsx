import withLog from '../../hoc/withLog'
import styles from './styles.module.css'

function Spinner() {
  return <div className={styles.spinner}></div>
}

Spinner.displayName = 'Spinner'

export default withLog(Spinner)
