const initialState = {
  fileAvatar: null,
  firstName: "Ivan",
  secondName: "Ivanov",
  careerObjective: "Full-Stack Web Developer",
  aboutMeInfo:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  email: "ivanivanov@mail.ru",
  emailValid: true,
  vkontakte: "http://localhost:3000/",
  skype: "localhost:3000",
  phoneNumber: "89009009090",
  github: "http://localhost:3000/",
  facebook: "http://localhost:3000/",
  education:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  avatar: "",
  avatarHorizontal: 50,
  avatarVertical: 50,
  languages: "English, Russian",
  id: null
};

const aboutMeReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "SET_ALL_USER_INFO":
      return {
        ...state,
        firstName: actions.payload?.firstName,
        secondName: actions.payload?.secondName,
        careerObjective: actions.payload?.careerObjective,
        aboutMeInfo: actions.payload?.aboutMeInfo,
        email: actions.payload?.email,
        vkontakte: actions.payload?.vkontakte,
        skype: actions.payload?.skype,
        phoneNumber: actions.payload?.phoneNumber,
        github: actions.payload?.github,
        facebook: actions.payload?.facebook,
        education: actions.payload?.education,
        avatar: actions.payload?.avatar,
        languages: actions.payload?.languages,
        id: actions.payload?.id
      };
    case "SET_FIRSTNAME":
      return {
        ...state,
        firstName: actions.payload,
      };
    case "SET_SECONDNAME":
      return {
        ...state,
        secondName: actions.payload,
      };
    case "SET_CAREEROBJECTIVE":
      return {
        ...state,
        careerObjective: actions.payload,
      };
    case "SET_ABOUTME":
      return {
        ...state,
        aboutMeInfo: actions.payload,
      };
    case "SET_EMAIL":
      return {
        ...state,
        email: actions.payload,
      };
    case "SET_EMAIL_VALID":
      return {
        ...state,
        emailValid: actions.payload,
      };
    case "SET_VKONTAKTE":
      return {
        ...state,
        vkontakte: actions.payload,
      };
    case "SET_SKYPE":
      return {
        ...state,
        skype: actions.payload,
      };
    case "SET_PHONENUMBER":
      return {
        ...state,
        phoneNumber: actions.payload,
      };
    case "SET_GITHUB":
      return {
        ...state,
        github: actions.payload,
      };
    case "SET_FACEBOOK":
      return {
        ...state,
        facebook: actions.payload,
      };
    case "SET_EDUCATION":
      return {
        ...state,
        education: actions.payload,
      };
    case "SET_LANGUAGES":
      return {
        ...state,
        languages: actions.payload,
      };
    case "SET_AVATAR":
      return {
        ...state,
        avatar: actions.payload.url,
        fileAvatar: actions.payload.value,
      };
    case "SET_AVATAR_HORIZONTAL":
      return {
        ...state,
        avatarHorizontal: actions.payload,
      };
    case "SET_AVATAR_VERTICAL":
      return {
        ...state,
        avatarVertical: actions.payload,
      };

    default:
      return state;
  }
};

export default aboutMeReducer;
