const initialState = {
  frontend: [
    { title: "JavaScript" },
    { title: "HTML&CSS" },
    { title: "Webpack" },
    { title: "Node.js" },
  ],
  backend: [
    { title: "Java" },
    { title: "PHP" },
    { title: "C#" },
    { title: "VB" },
  ],
  dbs: [
    { title: "MySQL" },
    { title: "PostgreSQL" },
    { title: "MongoDB" },
    { title: "OrientDB" },
  ],
  other: [{ title: "Cassandra" }, { title: "CouchDB" }, { title: "Oracle" }],
};

const aboutHardSkillsReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "SET_ALL_SKILLS":
      return {
        ...state,
        frontend: actions.payload?.frontend,
        backend: actions.payload?.backend,
        dbs: actions.payload?.dbs,
        other: actions.payload?.other,
      };
    case "SET_FRONTEND":
      return {
        ...state,
        frontend: actions.payload,
      };
    case "SET_BACKEND":
      return {
        ...state,
        backend: actions.payload,
      };
    case "SET_DBS":
      return {
        ...state,
        dbs: actions.payload,
      };
    case "SET_OTHER":
      return {
        ...state,
        other: actions.payload,
      };
    default:
      return state;
  }
};

export default aboutHardSkillsReducer;
