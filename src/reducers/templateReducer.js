const initialState = {
  templateNumber: "",
  theme: "black",
  checkedA: true,
};

const templateReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "SET_TEMPLATE_NUMBER":
      return {
        ...state,
        templateNumber: actions.payload,
      };
    case "SET_THEME_LIGHT":
      return {
        ...state,
        theme: "white",
      };
    case "SET_THEME_DARK":
      return {
        ...state,
        theme: "black",
      };
    case "SET_CHECKED_A":
      return {
        ...state,
        checkedA: actions.payload,
      };
    default:
      return state;
  }
};

export default templateReducer;
