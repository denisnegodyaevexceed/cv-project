import actions from "../constants/actionTypes";

const setFirstNameAction = (data) => ({
  type: actions.SET_FIRSTNAME,
  payload: data,
});

const setSecondNameAction = (data) => ({
  type: actions.SET_SECONDNAME,
  payload: data,
});

const setCareerObjectiveAction = (data) => ({
  type: actions.SET_CAREEROBJECTIVE,
  payload: data,
});

const setAgeAction = (data) => ({
  type: actions.SET_AGE,
  payload: data,
});

const setAboutMeInfoAction = (data) => ({
  type: actions.SET_ABOUTME,
  payload: data,
});

const setEmailAction = (data) => ({
  type: actions.SET_EMAIL,
  payload: data,
});

const setVkontakteAction = (data) => ({
  type: actions.SET_VKONTAKTE,
  payload: data,
});

const setSkypeAction = (data) => ({
  type: actions.SET_SKYPE,
  payload: data,
});

const setGithubAction = (data) => ({
  type: actions.SET_GITHUB,
  payload: data,
});

const setPhoneNumberAction = (data) => ({
  type: actions.SET_PHONENUMBER,
  payload: data,
});

const setFacebookAction = (data) => ({
  type: actions.SET_FACEBOOK,
  payload: data,
});

const setEducationAction = (data) => ({
  type: actions.SET_EDUCATION,
  payload: data,
});
const setLanguagesAction = (data) => ({
  type: actions.SET_LANGUAGES,
  payload: data,
});

const setAvatarAction = (url, value) => ({
  type: actions.SET_AVATAR,
  payload: {
    url: url,
    value: value,
  },
});

const setAllAction = (data) => ({
  type: actions.SET_ALL_USER_INFO,
  payload: data,
});

const setAvatarHorizontal = (data) => ({
  type: actions.SET_AVATAR_HORIZONTAL,
  payload: data,
});

const setAvatarVertical = (data) => ({
  type: actions.SET_AVATAR_VERTICAL,
  payload: data,
});

const setEmailValid = (data) => ({
  type: actions.SET_EMAIL_VALID,
  payload: data,
});

const setIdClean = () => ({
  type: actions.SET_ID_CLEAN
})

const allAboutMeActions = {
  setFirstNameAction,
  setSecondNameAction,
  setCareerObjectiveAction,
  setAgeAction,
  setAboutMeInfoAction,
  setEmailAction,
  setVkontakteAction,
  setPhoneNumberAction,
  setSkypeAction,
  setGithubAction,
  setFacebookAction,
  setEducationAction,
  setLanguagesAction,
  setAvatarAction,
  setAllAction,
  setAvatarHorizontal,
  setAvatarVertical,
  setEmailValid,
  setIdClean
};

export default allAboutMeActions;
