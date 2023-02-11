import React from 'react'
import styles from './cartEmpty.module.scss'
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

const CartEmpty = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.emptyCart}>
      <span>🥱</span>
      <h1>Cart is empty</h1>
      <h1>Let's fix it</h1>
      <Button onClick={() => navigate('/allProducts')} sx={{width: '20%', height: '50px', marginTop: '20px'}} variant='contained'>Products List</Button>
    </div>
  )
}

export default CartEmpty