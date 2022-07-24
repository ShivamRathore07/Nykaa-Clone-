import React, { useEffect } from "react";
import ProductsHeader from "./ProductsHeader";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../actions/products";
import ProductsCard from "./ProductsCard";
import styles from "./Products.module.css";
import Accordian from "./Accordian";


const Products = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  console.log(products);

  return (
    <div style={{textAlign: 'center'}}>
      <div className={styles.container}>
        <div>
          <ProductsHeader />
        </div>
        <div className={styles.out_container}>
          <Accordian />
          <div className={styles.cardContainer}>
            {products?.map((e, i) => (
                <ProductsCard key={e._id} {...e} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
