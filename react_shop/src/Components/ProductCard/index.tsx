import React from "react";
import styles from "./productCard.module.scss";
import Rating from "@mui/material/Rating";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { setDefaultData } from "../../Redux/Slices/cartSlice";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { FetchData } from "../../Redux/Slices/productSlice";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../Redux/hooks";
import Checkbox from "@mui/material/Checkbox";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

interface ProductProps {
  item: FetchData;
}

export const ProductCard = ({ item }: ProductProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  return (
    <Card sx={{ position: "relative" }}>
      <div
        style={{
          height: "50px",
          width: "50px",
          position: "absolute",
          left: "0",
          top: "0",
          zIndex: "10",
        }}
      >
        <Checkbox
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon/>}
        />
      </div>

      <CardActionArea
        onClick={() => {
          navigate(`/about/${item.id}`);
          dispatch(setDefaultData());
        }}
      >
        <CardMedia component="img" image={item.images[0]} alt="product image" />
        <CardContent className={styles.cardInfo}>
          <span className={styles.cardTitle}>
            <b>{item.title}</b>
          </span>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span className={styles.cardPrice}>
              <b>${item.price}</b>
            </span>
            <Rating value={item.rating} readOnly />
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
