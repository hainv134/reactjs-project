import { ADD_JOB, DELETE_JOB, SET_JOB } from "./constant";

export const action = {
  setjob: (payload) => {
    return {
      TYPE: SET_JOB,
      payload,
    };
  },
  addjob: (payload) => {
    return {
      TYPE: ADD_JOB,
      payload,
    };
  },
  deletejob: (payload) => {
    return {
      TYPE: DELETE_JOB,
      payload,
    };
  },
};
