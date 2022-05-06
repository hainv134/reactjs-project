import { ADD_JOB, DELETE_JOB, SET_JOB } from "./constant";

// Init
export const initState = {
  job: "",
  jobs: [],
};

// Reducer
const reducer = (state, action) => {
  switch (action.TYPE) {
    case SET_JOB:
      return {
        ...state,
        job: action.payload,
      };
    case ADD_JOB:
      return {
        job: action.payload,
        jobs: [...state.jobs, action.payload],
      };
    case DELETE_JOB:
      const newJobs = [...state.jobs];
      newJobs.splice(action.payload, 1);
      return {
        ...state,
        jobs: newJobs,
      };
    default:
      break;
  }
};

export default reducer;
