import React, { useContext } from 'react'
import styles from './CSS/category.module.css'
import { mediaContext } from '../../context/mediaContext'


const Category = ({image, text, key}) => {
  const {handleCategoryClick} = useContext(mediaContext)
  return (
    <li onClick={() => handleCategoryClick(text)} key={key} className={`${text === 'All' ? styles.one : ''} ${styles.container}`}>
        <img className={styles.img} src={image} alt="" />
        <span className={styles.text}>{text}</span>
    </li>
  )
}

export default Category
