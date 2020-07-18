import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

const useStyles = makeStyles({
  root: {
    width: 200,
    display: "flex",
    alignItems: "center",
  },
});

function CheckoutProduct({ id, title, price, rating, image }) {
  const classes = useStyles();
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    // remove item from basket...
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  //   const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          <div className={classes.root}>
            <Rating name="read-only" value={rating} readOnly />
          </div>
        </div>
        <button onClick={removeFromBasket}>Remove from basket </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
