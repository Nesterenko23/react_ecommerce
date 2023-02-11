import Drawer from "@mui/material/Drawer";
import React from "react";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import styles from "./drawer.module.scss";
interface DrawerProps {
  navList: string[];
  logo: string;
}

const TemporaryDrawer = ({ navList, logo }: DrawerProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <IconButton onClick={() => setIsOpen(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={isOpen} onClose={() => setIsOpen(false)}>
        <div className={styles.drawerBlock}>
          <Link to="/">
            <img src={logo} onClick={() => setIsOpen(false)}></img>
          </Link>
          {navList.map((point, index) => (
            <div
              onClick={() => setIsOpen(false)}
              className={styles.menuPoint}
              key={index}
            >
              <span>{point.toUpperCase()}</span>
            </div>
          ))}
        </div>
      </Drawer>
    </>
  );
};
export default TemporaryDrawer;
