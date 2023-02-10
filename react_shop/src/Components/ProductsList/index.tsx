import React from "react";
import {ProductCard} from "../ProductCard";
import CardSkeleton from "../CardSkeleton/CardSkeleton";
import ListPagination from "../Pagination";
import Grid from "@mui/material/Grid";
import styles from "./productsList.module.scss";
import { productSelector } from "../../Redux/Slices/productSlice";
import { useAppSelector } from "../../Redux/hooks";
import ServerErrorPage from "../ServerError";
const ProductsList = () => {
  const { items, status } = useAppSelector(productSelector);

  const searchValue = useAppSelector((state) => state.search.searchValue);

  const products = searchValue
    ? items.filter((value) =>
        value.title.toLowerCase().includes(searchValue.toLowerCase())
      )
    : items;
  return (
    <>{
      status == "error" ? <ServerErrorPage/> : 
      <Grid container spacing={2}>
      {status == "loading"
        ? [...new Array(8)].map((value, index) => <CardSkeleton key={index} />)
        : products.map((item) => (
            <Grid key={item.id} item xs={12} sm={6} md={4} lg={3}>
              <ProductCard item={item} />
            </Grid>
          ))}
      <div className={styles.paginationBlock}>
        <ListPagination />
      </div>
    </Grid>
    }</>
   
  );
};

export default ProductsList;
