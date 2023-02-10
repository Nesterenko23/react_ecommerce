import React from "react";
import styles from "./productsPage.module.scss";
import { setSearchValue } from "../../Redux/Slices/searchSlice";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import ProductsList from "../../Components/ProductsList";
import Categories from "../../Components/Categories";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
const ProductsPage = () => {

  const searchValue = useAppSelector((state)=>state.search.searchValue);

  const dispatch = useAppDispatch();


  React.useEffect(()=>{window.scrollTo(0,0)}, [])

  return (
    <section className={styles.productsSection}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionTitle}>
          <b>All Items</b>
        </span>
        <div className={styles.sectionSearch}>
          <SearchOutlinedIcon sx={{color: 'gray'}}/>
          <input
            value={searchValue}
            placeholder="Search"
            onChange={(e) => dispatch(setSearchValue(e.target.value))}
          />
          {searchValue && (
            <CloseOutlinedIcon
              style={{cursor: 'pointer', color: 'gray'}}
              onClick={() => dispatch(setSearchValue(""))}
            ></CloseOutlinedIcon>
          )}
        </div>
      </div>

      <div>
        <div className={styles.sortBlock}>
          <Categories />
        </div>
        <ProductsList/>
      </div>
    </section>
  );
};

export default ProductsPage;
