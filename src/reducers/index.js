const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_MAIN':
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default: return state;
  }
};

export default reducer;