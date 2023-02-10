import React, { Suspense } from "react";
import "./styles/app.scss";
import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import { filterSelector } from "./Redux/Slices/filterSlice";
import { fetchItems } from "./Redux/Slices/productSlice";
import { useAppSelector, useAppDispatch } from "./Redux/hooks";
import { paginationSelector } from "./Redux/Slices/paginationSlice";
import HomePage from "./Pages/HomePage";
import Footer from "./Components/Footer";
import { CircularProgress } from "@mui/material";

function App() {
  const { categoryId, sortRule } = useAppSelector(filterSelector);
  const { pageNumber } = useAppSelector(paginationSelector);
  const dispatch = useAppDispatch();

  const CartPage = React.lazy(() => import(/* webpackChunkName: "CartPage" */"./Pages/CartPage"));
  const AboutPage = React.lazy(() => import(/* webpackChunkName: "AboutPage" */"./Pages/AboutPage"));
  const ProductsPage = React.lazy(() => import(/* webpackChunkName: "ProductsPage" */"./Pages/ProductsPage"));
  const NotFoundPage = React.lazy(() => import(/* webpackChunkName: "NotFoundPage" */"./Pages/NotFoundPage"));
  React.useEffect(() => {
    dispatch(fetchItems({ categoryId, sortRule, pageNumber }));
  }, [categoryId, sortRule, pageNumber]);

  return (
    <div className="wrapper">
      <Header />
      <Suspense fallback={<div style={{width: '100%', height: '700px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><CircularProgress/></div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/allproducts" element={<ProductsPage />} />
          <Route path="/about/:id" element={<AboutPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>

      <Footer />
    </div>
  );
}

export default App;
