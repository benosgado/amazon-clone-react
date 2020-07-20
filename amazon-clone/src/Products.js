import React, { useEffect, useState } from "react";
import Product from "./Product";
import "./Products.css";
import { db } from "./firebase";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // effect
    db.collection("Products").onSnapshot(
      (snapshot) =>
        setProducts(
          snapshot.docs.map((doc) => ({ id: doc.id, product: doc.data() }))
        )
    );

    return () => {
      // cleanup
    };
  }, []);

  return (
    <div className="products__row">
      {products.map(({id, product}) => (
        <Product
          key={id}
          id={product.id}
          title={product.title}
          price={product.price}
          rating={product.rating}
          image={product.image}
        />
      ))}
    </div>
  );
}

export default Products;
