import React from "react";
import styles from "./categories.module.scss";
import {
  setCategoryId,
  setSortRule,
  categoryIdSelector,
} from "../../Redux/Slices/filterSlice";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";

const Categories = () => {
  const categoryId = useAppSelector(categoryIdSelector);

  const dispatch = useAppDispatch();

  const sortBy = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSortRule(e.target.value));
  };

  const categories = [
    "ALL",
    "PUNCHING BAGS",
    "GLOVES",
    "HAND WRAPS",
    "TRAINING EQUIPMENT",
    "CLOTHING & SHOES",
    "PROTECTIVE GEAR",
  ];

  type ConditionsType = {
    title: string;
    sortParametr:
      | "price&order=desc"
      | "price&order=asc"
      | "title&order=asc"
      | "title&order=desc";
  };

  const sortConditions: ConditionsType[] = [
    { title: "Price (High to Low)", sortParametr: "price&order=desc" },
    { title: "Price (Low to High)", sortParametr: "price&order=asc" },
    { title: "Alphabet (A-Z)", sortParametr: "title&order=asc" },
    { title: "Alphabet (Z-A)", sortParametr: "title&order=desc" },
  ];

  return (
    <>
      <div className={styles.categories}>
        <ul>
          {categories.map((value, index) => (
            <li
              key={index}
              onClick={() => dispatch(setCategoryId(index))}
              className={categoryId === index ? `${styles.active}` : ""}
            >
              {value}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.popup}>
        <span>
          <b>Sort By</b>
        </span>
        <select onChange={sortBy}>
          {sortConditions.map((obj, index) => (
            <option value={obj.sortParametr} key={index}>
              {obj.title}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Categories;
