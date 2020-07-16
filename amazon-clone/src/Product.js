import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import "./Product.css";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

const useStyles = makeStyles({
  root: {
    width: 200,
    display: "flex",
    alignItems: "center",
  },
});

function Product({ id, title, price, rating, image }) {
  const [value, setValue] = React.useState(rating);
  const [hover, setHover] = React.useState(-1);
  const classes = useStyles();
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {/* {Array(rating)
            .fill()
            .map((_) => {
              return <p>🌟</p>;
            })} */}
          <div className={classes.root}>
            <Rating
              name="hover-feedback"
              value={rating}
              precision={0.5}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
            />
            {value !== null && (
              <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
            )}
          </div>
        </div>
      </div>

      <img src={image} alt="" />
      <button>Add to basket</button>
    </div>
  );
}

export default Product;
