import Drawer from "@mui/material/Drawer";
import React from "react";
import { IconButton, ListItemIcon } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import TimelineIcon from "@mui/icons-material/Timeline";
import styles from "./drawer.module.scss";

interface DrawerProps {
  logo: string;
}

const TemporaryDrawer = ({ logo }: DrawerProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();
  return (
    <>
      <IconButton onClick={() => setIsOpen(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={isOpen} onClose={() => setIsOpen(false)}>
        <div className={styles.drawerBlock}>
          <img
            src={logo}
            onClick={() => {
              setIsOpen(false);
              navigate("/");
            }}
          ></img>
          <ul>
            <ListItemButton
              onClick={() => {
                setIsOpen(false);
                navigate("/allProducts");
              }}
              sx={{ height: "70px" }}
            >
              <ListItemIcon>
                <ShoppingBagIcon />
              </ListItemIcon>
              SHOP
            </ListItemButton>
            <ListItemButton
              onClick={() => setIsOpen(false)}
              sx={{ height: "70px" }}
            >
              <ListItemIcon>
                <SupervisedUserCircleIcon />
              </ListItemIcon>
              BLOG
            </ListItemButton>
            <ListItemButton
              onClick={() => setIsOpen(false)}
              sx={{ height: "70px" }}
            >
              <ListItemIcon>
                <TimelineIcon />
              </ListItemIcon>
              OUR STORY
            </ListItemButton>
          </ul>
        </div>
      </Drawer>
    </>
  );
};
export default TemporaryDrawer;
