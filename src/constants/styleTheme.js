const styleThemeLight = {
  background:
    "linear-gradient(45deg, rgb(157, 120, 210), rgb(86, 181, 184)) no-repeat fixed",
  backgroundLoader: "white",
  textColorLoader: "black",
  exceed: "./public_images/exceed2.png",
};
const styleThemeDark = {
  background:
    "linear-gradient(45deg, rgb(0, 0, 0) 55%, rgb(247, 77, 51) 5%) no-repeat fixed",
  backgroundLoader: "black",
  textColorLoader: "white",
  exceed: "./public_images/exceed.png",
};

const styleTheme = { styleThemeDark, styleThemeLight };
export default styleTheme;
