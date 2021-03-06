const initialState = {
  pages: []
};

const reducer = (state = initialState, action) => {
  console.log(action.type)
  console.log(action.pages)
  switch (action.type) {
    case "SET_PAGES":
      return {
        ...state,
        pages: action.pages
      };
    default:
      return state;
  }
};

export default reducer;
