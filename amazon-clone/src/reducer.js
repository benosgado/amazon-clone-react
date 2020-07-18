export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) => {
  return basket?.reduce((amount, item) => item.price + amount, 0);
};

const reducer = (state, action) => {
  // console.log(state);
  console.log(action);
  switch (action.type) {
    // mutable updates
    case "SET_USER":
      return {
        ...state,
        user: action.user
      }
    case "ADD_TO_BASKET":
      // Logic for adding item to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      // Logic for Removing item from basket

      // clone the basket
      let newBasket = [...state.basket];

      // we check to see if product exist
      const index = state.basket.findIndex((basketItem) => {
        return basketItem.id === action.id;
      });

      if (index >= 0) {
        // item exists in basket, remove it
        newBasket.splice(index, 1);
      } else {
        console.warn(`Can't remove product (id: ${action.id}) as its now`);
      }

      return {
        ...state,
        basket: newBasket,
      };
    default:
      return state;
  }
};

export default reducer;
