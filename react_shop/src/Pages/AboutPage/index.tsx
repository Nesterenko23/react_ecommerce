import React from "react";
import {
  addProduct,
  setSize,
  increase,
  decrease,
} from "../../Redux/Slices/cartSlice";
import styles from "./aboutPage.module.scss";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import { FetchData } from "../../Redux/Slices/productSlice";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import ServerErrorPage from "../../Components/ServerError";
import Loading from "../../Components/Loading";
const AboutPage = () => {
  const [photoId, setPhotoId] = React.useState(0);
  const { id } = useParams();
  const [product, setProduct] = React.useState<FetchData>();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    window.scrollTo(0, 0);
    const fetchPizza = async () => {
      try {
        const { data } = await axios.get(
          `https://63c85f20075b3f3a91dfbea2.mockapi.io/products/${id}`
        );
        setProduct(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchPizza();
  }, []);

  const { sizeId, count } = useAppSelector((state) => state.cart);

  const dispatch = useAppDispatch();

  if (loading) {
    return (
      <div
        className={styles.wrapper}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Loading />
      </div>
    );
  }

  return (
    <>
      {error ? (
        <ServerErrorPage />
      ) : (
        <div className={styles.wrapper}>
          <div className={styles.listWrapper}>
            <div className={styles.photoList}>
              {product?.images.map((value, index) => (
                <img
                  key={index}
                  src={value}
                  onClick={() => setPhotoId(index)}
                ></img>
              ))}
            </div>
          </div>

          <div className={styles.mainPhoto}>
            <img src={product?.images[photoId]}></img>
          </div>

          <div className={styles.aboutBlock}>
            <header>
              <span className={styles.title}>
                <b>{product?.title}</b>
              </span>
              <span className={styles.price}>${product?.price}</span>
            </header>

            <main>
              <Rating value={product?.rating} readOnly />
              <div className={styles.description}>
                {product?.description.map((value, index) => (
                  <p key={index}>{value}</p>
                ))}
              </div>

              <div className={styles.size}>
                <div style={{ width: "100%", overflow: "auto" }}>
                  <ul>
                    {product?.size.map((value, index) => (
                      <li
                        key={index}
                        onClick={() => dispatch(setSize(index))}
                        className={sizeId == index ? styles.active : ""}
                      >
                        {value}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={styles.pushBlock}>
                <div className={styles.count}>
                  <button onClick={() => dispatch(increase())}>+</button>
                  <span>
                    <b>{count}</b>
                  </span>
                  <button onClick={() => dispatch(decrease())}>-</button>
                </div>
                <Button
                  sx={{ width: "70%" }}
                  onClick={() => dispatch(addProduct(product))}
                  variant="contained"
                >
                  ADD TO CART
                </Button>
              </div>
            </main>

            <footer>
              <div>
                <span>
                  <b>Color: {product?.color}</b>
                </span>
                <span>
                  <b>Model: {product?.model}</b>
                </span>
                <span>
                  <b>Category: {product?.category}</b>
                </span>
              </div>
            </footer>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutPage;
