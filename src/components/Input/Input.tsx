import withLog from '../../hoc/withLog'
import { InputProps } from './Input.type'

import styles from './styles.module.css'

function Input({ placeholder, value, onChange }: InputProps) {
  return (
    <input
      className={styles.input}
      placeholder={placeholder}
      type='text'
      value={value}
      onChange={onChange}
    />
  )
}

Input.displayName = 'Input'

export default withLog(Input)
