import { useReducer, useRef } from "react";
import { action } from "./action";
import logger from "./logger";
import reducer, { initState } from "./reducer";

function App() {
  const inpRef = useRef();
  const [state, dispatch] = useReducer(logger(reducer), initState);

  const { job, jobs } = state;
  return (
    <div>
      <input
        ref={inpRef}
        value={job}
        onChange={(e) => {
          dispatch(action.setjob(e.target.value));
        }}
      />
      <button onClick={(e) => dispatch(action.addjob(job))}>Add</button>
      <ul>
        {jobs.map((j) => (
          <li key={j} onClick={() => dispatch(action.deletejob(j))}>
            {j}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
