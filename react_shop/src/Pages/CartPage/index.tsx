import React from "react";
import { removeProduct, cartSelector } from "../../Redux/Slices/cartSlice";
import Button from "@mui/material/Button";
import styles from "./cartPage.module.scss";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
const CartPage = () => {
  const { products, totalCount, totalPrice } = useAppSelector(cartSelector);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.cart}>
      <ul className={styles.productList}>
        {products.map((el) => (
          <li key={el.id + el.size} className={styles.cartProduct}>
            <img className={styles.productImg} src={el.images[0]} alt="" />
            <div className={styles.infoBlock}>
              <h3>{el.title}</h3>
              <span>
                {el.size} | {el.color}
              </span>
              <span style={{ color: "#007dbc" }}>
                <b>{el.price}$</b>
              </span>
            </div>
            <div className={styles.countBlock}>
              <span>
                <b>{el.count}</b>
              </span>
            </div>
            <CloseOutlinedIcon onClick={() => dispatch(removeProduct(el))}/>
          </li>
        ))}
      </ul>
      <div className={styles.cartInfo}>
        <h3>{`Cart totals (${totalCount} items)`}</h3>
        <div className={styles.subTotalBlock}>
          <div>
            <span>Subtotal</span>
            <span>${Math.round(totalPrice * 100) / 100}</span>
          </div>
          <div>
            <span>Discount</span>
            <span>$0</span>
          </div>
          <div>
            <span>Shipping</span>
            <span>Calculated at checkout</span>
          </div>
          <div>
            <span>Taxes</span>
            <span>Calculated at checkout</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <h3>Estimated Total</h3>
          <h3>${Math.round(totalPrice * 100) / 100}</h3>
        </div>

        <Button
          sx={{ width: "100%", height: "50px", marginTop: "50px" }}
          variant="contained"
        >
          Check Out
        </Button>
      </div>
    </div>
  );
};

export default CartPage;
