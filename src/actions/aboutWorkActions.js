import actions from "../constants/actionTypes";

const setFirstCompanyName = (data) => ({
  type: actions.SET_FIRSTCOMPANY_NAME,
  payload: data,
});

const setFirstCompanyPosition = (data) => ({
  type: actions.SET_FIRSTCOMPANY_POSITION,
  payload: data,
});

const setFirstCompanyDescription = (data) => ({
  type: actions.SET_FIRSTCOMPANY_DESCRIPTION,
  payload: data,
});

const setSecondCompanyName = (data) => ({
  type: actions.SET_SECONDCOMPANY_NAME,
  payload: data,
});

const setSecondCompanyPosition = (data) => ({
  type: actions.SET_SECONDCOMPANY_POSITION,
  payload: data,
});

const setSecondCompanyDescription = (data) => ({
  type: actions.SET_SECONDCOMPANY_DESCRIPTION,
  payload: data,
});

const setAllHistoryAction = (data) => ({
  type: actions.SET_ALL_HISTORY,
  payload: data,
});

const allAboutWorkActions = {
  setFirstCompanyName,
  setFirstCompanyPosition,
  setFirstCompanyDescription,
  setSecondCompanyName,
  setSecondCompanyPosition,
  setSecondCompanyDescription,
  setAllHistoryAction,
};

export default allAboutWorkActions;
