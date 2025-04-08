import { useEffect, useState } from "react";
import { ProductData } from "../Services/Product-api";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";




const Products = (props) => {
  const [products, Setproducts] = useState([])
  const [isLoading, SetisLoading] = useState(true)
  
useEffect(() => {

  const getProducts = async() =>{
    try {
      const response = await ProductData();
      Setproducts(response)
      SetisLoading(false)
 
      // console.log(products)
    } catch (error) {
      SetisLoading(false)
      
    }
  }
  getProducts()

},[]);
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {isLoading && <h3 className={classes.load}>Loading</h3>}
        {products.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
