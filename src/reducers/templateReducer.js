import styleTheme from "../constants/styleTheme";

const initialState = {
  templateNumber: "",
  theme: styleTheme.styleThemeDark.backgroundLoader,
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
        theme: styleTheme.styleThemeLight.backgroundLoader,
      };
    case "SET_THEME_DARK":
      return {
        ...state,
        theme: styleTheme.styleThemeDark.backgroundLoader,
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
