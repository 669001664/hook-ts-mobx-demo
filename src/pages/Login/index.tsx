import React from "react";
import styles from './style.module.css'

interface IProps {
  authStore?: any
}
const Login: React.FC<IProps> = () => {
  return (
    <div className={styles.content}></div>
  )
}

export default Login