const initialState = {
  firstProject: {
    id: 1,
    name: "asd",
    link: "asdasd",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    whatYouDo:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    stack: [{ title: "Cassandra" }, { title: "CouchDB" }, { title: "Oracle" }],
  },
  secondProject: {
    id: 2,
    name: "asd",
    link: "asdasd",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    whatYouDo:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    stack: [{ title: "Cassandra" }, { title: "CouchDB" }, { title: "Oracle" }],
  },
  thirdProject: {
    id: 3,
    name: "asd",
    link: "asdasd",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    whatYouDo:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    stack: [{ title: "Cassandra" }, { title: "CouchDB" }, { title: "Oracle" }],
  },
  fourthProject: {
    id: 4,
    name: "asd",
    link: "asdasd",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    whatYouDo:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    stack: [{ title: "Cassandra" }, { title: "CouchDB" }, { title: "Oracle" }],
  },
  fifthProject: {
    id: 5,
    name: "",
    link: "",
    summary: "",
    whatYouDo: "",
    stack: [],
  },
  sixthProject: {
    id: 6,
    name: "",
    link: "",
    summary: "",
    whatYouDo: "",
    stack: [],
  },
};

const portfolioReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "SET_FIRSTPROJECT_NAME":
      return {
        ...state,
        firstProject: { ...state.firstProject, name: actions.payload },
      };
    case "SET_FIRSTPROJECT_LINK":
      return {
        ...state,
        firstProject: { ...state.firstProject, link: actions.payload },
      };
    case "SET_FIRSTPROJECT_SUMMARY":
      return {
        ...state,
        firstProject: { ...state.firstProject, summary: actions.payload },
      };
    case "SET_FIRSTPROJECT_WHATYOUDO":
      return {
        ...state,
        firstProject: { ...state.firstProject, whatYouDo: actions.payload },
      };
    case "SET_FIRSTPROJECT_STACK":
      return {
        ...state,
        firstProject: { ...state.firstProject, stack: actions.payload },
      };
    case "SET_SECONDPROJECT_NAME":
      return {
        ...state,
        secondProject: { ...state.secondProject, name: actions.payload },
      };
    case "SET_SECONDPROJECT_LINK":
      return {
        ...state,
        secondProject: { ...state.secondProject, link: actions.payload },
      };
    case "SET_SECONDPROJECT_SUMMARY":
      return {
        ...state,
        secondProject: { ...state.secondProject, summary: actions.payload },
      };
    case "SET_SECONDPROJECT_WHATYOUDO":
      return {
        ...state,
        secondProject: { ...state.secondProject, whatYouDo: actions.payload },
      };
    case "SET_SECONDPROJECT_STACK":
      return {
        ...state,
        secondProject: { ...state.secondProject, stack: actions.payload },
      };
    case "SET_THIRDPROJECT_NAME":
      return {
        ...state,
        thirdProject: { ...state.thirdProject, name: actions.payload },
      };
    case "SET_THIRDPROJECT_LINK":
      return {
        ...state,
        thirdProject: { ...state.thirdProject, link: actions.payload },
      };
    case "SET_THIRDPROJECT_SUMMARY":
      return {
        ...state,
        thirdProject: { ...state.thirdProject, summary: actions.payload },
      };
    case "SET_THIRDPROJECT_WHATYOUDO":
      return {
        ...state,
        thirdProject: { ...state.thirdProject, whatYouDo: actions.payload },
      };
    case "SET_THIRDPROJECT_STACK":
      return {
        ...state,
        thirdProject: { ...state.thirdProject, stack: actions.payload },
      };
    case "SET_FOURTHPROJECT_NAME":
      return {
        ...state,
        fourthProject: { ...state.fourthProject, name: actions.payload },
      };
    case "SET_FOURTHPROJECT_LINK":
      return {
        ...state,
        fourthProject: { ...state.fourthProject, link: actions.payload },
      };
    case "SET_FOURTHPROJECT_SUMMARY":
      return {
        ...state,
        fourthProject: { ...state.fourthProject, summary: actions.payload },
      };
    case "SET_FOURTHPROJECT_WHATYOUDO":
      return {
        ...state,
        fourthProject: { ...state.fourthProject, whatYouDo: actions.payload },
      };
    case "SET_FOURTHPROJECT_STACK":
      return {
        ...state,
        fourthProject: { ...state.fourthProject, stack: actions.payload },
      };
    case "SET_FIFTHPROJECT_NAME":
      return {
        ...state,
        fifthProject: { ...state.fifthProject, name: actions.payload },
      };
    case "SET_FIFTHPROJECT_LINK":
      return {
        ...state,
        fifthProject: { ...state.fifthProject, link: actions.payload },
      };
    case "SET_FIFTHPROJECT_SUMMARY":
      return {
        ...state,
        fifthProject: { ...state.fifthProject, summary: actions.payload },
      };
    case "SET_FIFTHPROJECT_WHATYOUDO":
      return {
        ...state,
        fifthProject: { ...state.fifthProject, whatYouDo: actions.payload },
      };
    case "SET_FIFTHPROJECT_STACK":
      return {
        ...state,
        fifthProject: { ...state.fifthProject, stack: actions.payload },
      };
    case "SET_SIXTHPROJECT_NAME":
      return {
        ...state,
        sixthProject: { ...state.sixthProject, name: actions.payload },
      };
    case "SET_SIXTHPROJECT_LINK":
      return {
        ...state,
        sixthProject: { ...state.sixthProject, link: actions.payload },
      };
    case "SET_SIXTHPROJECT_SUMMARY":
      return {
        ...state,
        sixthProject: { ...state.sixthProject, summary: actions.payload },
      };
    case "SET_SIXTHPROJECT_WHATYOUDO":
      return {
        ...state,
        sixthProject: { ...state.sixthProject, whatYouDo: actions.payload },
      };
    case "SET_SIXTHPROJECT_STACK":
      return {
        ...state,
        sixthProject: { ...state.sixthProject, stack: actions.payload },
      };

    case "SET_PORTFOLIO_ALL":
      return {
        ...state,
        firstProject: actions.payload?.firstProject,
        secondProject: actions.payload?.secondProject,
        thirdProject: actions.payload?.thirdProject,
        fourthProject: actions.payload?.fourthProject,
        fifthProject: actions.payload?.fifthProject,
        sixthProject: actions.payload?.sixthProject,
      };

    default:
      return state;
  }
};

export default portfolioReducer;
