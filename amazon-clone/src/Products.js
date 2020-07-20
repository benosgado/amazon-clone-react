import React from "react";
import Product from "./Product";
import "./Products.css";

function Products() {
  let Products = [
    {
      id: 121,
      title: "Vans Men's Classic Short Sleeve T-Shirt",
      price: 20.72,
      rating: 4.5,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/711YeFGUlfL._AC_UY879_.jpg",
    },
    {
      id: 122,
      title: "Levi's Men's Graphic Set-in Neck T-Shirt",
      price: 11.96,
      rating: 5,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/815KnQvZrcL._AC_UY879_.jpg",
    },
    {
      id: 123,
      title: "Eastpak Tranverz S Suitcase, 51 cm, 42 L, Black",
      price: 121.01,
      rating: 3.5,
      image: "https://m.media-amazon.com/images/I/71-09J9aqUL._AC_UY218_.jpg",
    },
    {
      id: 124,
      title: "Vans M CLASSIC CREW - Socks - Men (Pack of 3)",
      price: 17.6,
      rating: 3,
      image: "https://m.media-amazon.com/images/I/919XV3IzIiL._AC_UY218_.jpg",
    },
    {
      id: 125,
      title: "Samsung QN82Q60RAFXZA Flat 82-Inch QLED 4K Q60 Series (2019)",
      price: 1997.99,
      rating: 5,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/91uohwV%2Bk3L._AC_SX679_.jpg",
    },
    {
      id: 126,
      title:
        "Homgeek, 1450W CACAGOO Countertop Blender for shakes and smoothies with 68 Oz BPA Free Tritan Container",
      price: 89.99,
      rating: 5,
      image: "https://images-na.ssl-images-amazon.com/images/I/61nuWxLecdL._AC_SX679_.jpg",
    },
    {
      id: 127,
      title: "Home Basics Tin, Turquoise Cookie Jar",
      price: 17.0,
      rating: 4.5,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61Ex4y%2BXfbL._AC_SX679_.jpg",
    },
    {
      id: 128,
      title: "Oggi Jumbo 9-1/2-Inch Ceramic Cookie Jar, White",
      price: 25.99,
      rating: 4,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/81S7S01-e2L._AC_SX679_.jpg",
    },
  ];

  return (
    <div className="products__row">
      {Products.map((product, key) => (
        <Product
          key={key}
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
