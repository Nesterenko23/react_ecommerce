import React from "react";
import Grid from "@mui/material/Grid";
import { ProductCard } from "../ProductCard";
import CardSkeleton from "../CardSkeleton/CardSkeleton";
import {FetchData} from '../../Redux/Slices/productSlice';
import axios from "axios";
import ServerErrorPage from "../ServerError";

const LastProducts = () => {
  
  const [products, setProducts] = React.useState<FetchData[]>();
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    const fetchPizza = async () => {
      try {
        const { data } = await axios.get<FetchData[]>(
          `https://63c85f20075b3f3a91dfbea2.mockapi.io/products?page=1&limit=8&sortBy=rating&order=desc`
        );
        setProducts(data);
      }
      catch {
        setError(true);
      }
      finally {
        setLoading(false);
      }
    };
    fetchPizza();
  }, []);

  if (loading) {
    return (
      <Grid container spacing={2}>
      {[...new Array(8)].map((value, index) => <CardSkeleton key={index} />)}
      </Grid>
      
    )
  }

  return (
    <>
    {
      error ? <ServerErrorPage/>
      :
      <div style={{height: '100%', width: '100%', marginTop: '50px'}}>
     <Grid container spacing={2}>
        {products?.map((item) => (
            <Grid key={item.id} item xs={12} sm={6} md={4} lg={3}>
              <ProductCard item={item} />
            </Grid>
          ))}
    </Grid>
    </div>
    }
    </>
    
  );
};

export default LastProducts;
