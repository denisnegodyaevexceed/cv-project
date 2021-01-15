import actions from "../constants/actionTypes";

const setFrontendAction = (data) => ({
  type: actions.SET_FRONTEND,
  payload: data,
});

const setBackendAction = (data) => ({
  type: actions.SET_BACKEND,
  payload: data,
});

const setDbsAction = (data) => ({
  type: actions.SET_DBS,
  payload: data,
});

const setOtherAction = (data) => ({
  type: actions.SET_OTHER,
  payload: data,
});

const setAllSkillsAction = (data) => {
  let newObj = { frontend: [], backend: [], dbs: [], other: [] };

  if (typeof data === "object") {
    for (let key in data) {
      newObj[key] = data[key];
    }
  }

  return { type: actions.SET_ALL_SKILLS, payload: newObj };
};

const allHardSkillsActions = {
  setFrontendAction,
  setBackendAction,
  setDbsAction,
  setOtherAction,
  setAllSkillsAction,
};

export default allHardSkillsActions;
