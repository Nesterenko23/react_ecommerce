import React from "react";
import styles from "./header.module.scss";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { cartSelector } from "../../Redux/Slices/cartSlice";
import { productsSelector } from "../../Redux/Slices/cartSlice";
import { useAppSelector } from "../../Redux/hooks";
import { useNavigate } from "react-router-dom";
import logo from "../../Icons/logo.png";
import TemporaryDrawer from "../Drawer";

const Header = () => {
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);
  const products = useAppSelector(productsSelector);
  const { totalPrice } = useAppSelector(cartSelector);
  const navigate = useNavigate();

  React.useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <header className={styles.header}>
      {screenWidth > 850 ? (
        <>
          <div className={styles.leftSide}>
            <Link to="/">
              <img
                className={styles.logo}
                src={logo}
                alt="Logo icon"
                onClick={() => navigate("/")}
              />
            </Link>
          </div>
          <nav className={styles.rightSide}>
            <span>Shop</span>
            <span>Blog</span>
            <span>Our story</span>
            <svg
              width="1"
              height="17"
              viewBox="0 0 1 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0.5"
                y1="-2.18557e-08"
                x2="0.500001"
                y2="17"
                stroke="#707070"
              />
            </svg>
          </nav>
        </>
      ) : (
        <>
          <TemporaryDrawer logo={logo} />
        </>
      )}

      <div className={styles.iconsList}>
        <IconButton>
          <SearchOutlinedIcon />
        </IconButton>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{ marginTop: "5px" }}>
            ${Math.round(totalPrice * 100) / 100}
          </span>
          <div onClick={() => navigate("/cart")}>
            <Badge
              sx={{
                position: "absolute",
                marginLeft: "32px",
                marginTop: "10px",
              }}
              badgeContent={products.length}
              color="primary"
            ></Badge>
            <IconButton>
              <LocalMallOutlinedIcon />
            </IconButton>
          </div>
        </div>

        <IconButton>
          <FavoriteBorderOutlinedIcon />
        </IconButton>
      </div>
    </header>
  );
};

export default Header;
