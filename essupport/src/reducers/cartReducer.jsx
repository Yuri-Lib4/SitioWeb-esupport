// reducers/cartReducer.js
const initialState = {
  items: [], // Define tu estado inicial aquí
};

export function cartReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        items: [...state.items, action.payload], // Agrega el producto al array de items
      };
    default:
      return state;
  }
}

export default cartReducer;
