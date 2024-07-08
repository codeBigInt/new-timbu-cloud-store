import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from './CSS/layout.module.css'

const Layout = () => {
  return (
    <div className={styles.container}>
      <Outlet />
    </div>
  )
}

export default Layout
