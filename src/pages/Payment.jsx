import React, { useContext } from 'react'
import styles from './CSS/payment.module.css'
import PaymentPage from '../components/Payment/PaymentPage'
import { mediaContext } from '../context/mediaContext'

const Payment = () => {
const { mediaWidth } = useContext(mediaContext)
  return (
    <div className={styles.container}>
      {mediaWidth >= 480 ? <Nav /> : ''}
      <PaymentPage />
    </div>
  )
}

export default Payment
