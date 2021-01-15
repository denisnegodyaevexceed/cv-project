const initialState = {
  headerBackground: "#fff",
  textAlign: "",
  posVertical: "",
  activeBlock: 1,
  avaBorderRadius: "0",
  headerImage: "",
  headerImagePosition: "cover",
  headerImageValue: "",
  bodyBackground: "#fff",
  bodyImage: "",
  bodyImagePosition: "cover",
  bodyImageValue: "",
  activeTextType: "nameActive",
  nameSize: 40,
  posSize: 24,
  titleSize: 21,
  subTitleSize: 19,
  textSize: 15,
  smallTextSize: 12,

  nameColor: "#333",
  posColor: "#333",
  titleColor: "#333",
  subTitleColor: "#aa1060",
  textColor: "#aa1060",
  smallTextColor: "#aa1060",
  customizedTemplateUid: null,
  matrixBlock: [
    {
      id: 1,
      h: 48,
      w: 4,
      x: 0,
      y: 0,
    },
    {
      id: 2,
      h: 24,
      w: 8,
      x: 4,
      y: 0,
    },
    {
      id: 3,
      h: 24,
      w: 8,
      x: 4,
      y: 24,
    },
    {
      id: 4,
      h: 48,
      w: 4,
      x: 0,
      y: 0,
    },
    {
      id: 5,
      h: 48,
      w: 4,
      x: 4,
      y: 0,
    },
    {
      id: 6,
      h: 48,
      w: 4,
      x: 8,
      y: 0,
    },
    {
      id: 7,
      h: 48,
      w: 4,
      x: 0,
      y: 48,
    },
    {
      id: 8,
      h: 48,
      w: 4,
      x: 4,
      y: 48,
    },

    {
      id: 9,
      h: 42,
      w: 12,
      x: 0,
      y: 42,
    },
    {
      id: 10,
      h: 42,
      w: 12,
      x: 42,
      y: 42,
    },
    {
      id: 11,
      h: 42,
      w: 12,
      x: 84,
      y: 42,
    },
    {
      id: 12,
      h: 42,
      w: 12,
      x: 126,
      y: 42,
    },
    {
      id: 13,
      h: 42,
      w: 12,
      x: 168,
      y: 42,
    },
    {
      id: 14,
      h: 42,
      w: 12,
      x: 210,
      y: 42,
    },
  ],
};

const customizedTemplateReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "SET_HEADER_BACKGROUND":
      return {
        ...state,
        headerBackground: actions.payload,
        headerImage: "",
        headerImageValue: "",
      };

    case "SET_MATRIX":
      return {
        ...state,
        matrixBlock: actions.payload,
      };

    case "SET_MAIN_STYLES":
      return {
        ...state,
        headerBackground: actions.payload?.headerBackground,
        textAlign: actions.payload?.textAlign,
        posVertical: actions.payload?.posVertical,
        avaBorderRadius: actions.payload?.avaBorderRadius,
        headerImagePosition: actions.payload?.headerImagePosition,
        bodyBackground: actions.payload?.bodyBackground,
        bodyImagePosition: actions.payload?.bodyImagePosition,
        activeTextType: actions.payload?.activeTextType,
        nameSize: actions.payload?.nameSize,
        posSize: actions.payload?.posSize,
        titleSize: actions.payload?.titleSize,
        subTitleSize: actions.payload?.subTitleSize,
        textSize: actions.payload?.textSize,
        smallTextSize: actions.payload?.smallTextSize,
        nameColor: actions.payload?.nameColor,
        posColor: actions.payload?.posColor,
        titleColor: actions.payload?.titleColor,
        subTitleColor: actions.payload?.subTitleColor,
        textColor: actions.payload?.textColor,
        smallTextColor: actions.payload?.smallTextColor,
      };

    case "SET_VERTICAL_POS":
      return {
        ...state,
        posVertical: actions.payload,
      };

    case "SET_TEXT_ALIGN":
      return {
        ...state,
        textAlign: actions.payload,
      };

    case "SET_BORDER_RADIUS_AVATAR":
      return {
        ...state,
        avaBorderRadius: actions.payload,
      };

    case "SET_ACTIVE_BLOCK":
      return {
        ...state,
        activeBlock: actions.payload,
      };
    case "SET_HEADER_IMAGE":
      return {
        ...state,
        headerImage: actions.payload.url,
        headerBackground: "",
        headerImageValue: actions.payload.value,
      };
    case "SET_HEADER_IMAGE_POSITION":
      return {
        ...state,
        headerImagePosition: actions.payload,
      };
    case "SET_BODY_BACKGROUND":
      return {
        ...state,
        bodyBackground: actions.payload,
        bodyImage: "",
        bodyImageValue: "",
      };
    case "SET_BODY_IMAGE_POSITION":
      return {
        ...state,
        bodyImagePosition: actions.payload,
      };
    case "SET_BODY_IMAGE":
      return {
        ...state,
        bodyImage: actions.payload.url,
        bodyBackground: "",
        bodyImageValue: actions.payload.value,
      };

    case "SET_ACTIVE_TEXT_TYPE":
      return {
        ...state,
        activeTextType: actions.payload,
      };

    case "SET_CUSTOM_TEMPLATE_UID":
      return {
        ...state,
        customizedTemplateUid: actions.payload,
      };

    case "SET_ACTIVE_TEXT_SIZE":
      return {
        ...state,
        nameSize:
          actions.payload.name === "nameActive"
            ? actions.payload.value
            : state.nameSize,
        posSize:
          actions.payload.name === "posActive"
            ? actions.payload.value
            : state.posSize,
        titleSize:
          actions.payload.name === "titleActive"
            ? actions.payload.value
            : state.titleSize,
        subTitleSize:
          actions.payload.name === "subTitleActive"
            ? actions.payload.value
            : state.subTitleSize,
        textSize:
          actions.payload.name === "textActive"
            ? actions.payload.value
            : state.textSize,
        smallTextSize:
          actions.payload.name === "smallTextActive"
            ? actions.payload.value
            : state.smallTextSize,
      };

    case "SET_ACTIVE_TEXT_COLOR":
      return {
        ...state,
        nameColor:
          actions.payload.name === "nameActive"
            ? actions.payload.value
            : state.nameColor,
        posColor:
          actions.payload.name === "posActive"
            ? actions.payload.value
            : state.posColor,
        titleColor:
          actions.payload.name === "titleActive"
            ? actions.payload.value
            : state.titleColor,
        subTitleColor:
          actions.payload.name === "subTitleActive"
            ? actions.payload.value
            : state.subTitleColor,
        textColor:
          actions.payload.name === "textActive"
            ? actions.payload.value
            : state.textColor,
        smallTextColor:
          actions.payload.name === "smallTextActive"
            ? actions.payload.value
            : state.smallTextColor,
      };

    default:
      return state;
  }
};

export default customizedTemplateReducer;
