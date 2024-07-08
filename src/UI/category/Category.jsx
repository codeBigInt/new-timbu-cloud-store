import React from 'react'
import styles from './CSS/category.module.css'


const Category = ({image, text, key}) => {
  return (
    <li key={key} className={`${key === 1 ? styles.one : ''} ${styles.container}`}>
        <img className={styles.img} src={image} alt="" />
        <span className={styles.text}>{text}</span>
    </li>
  )
}

export default Category
