import { createContext } from "react";

const SuperCheckerContext = createContext({
//   tasks: [],
//   setTask: (object) => {},
//   resetTasks: () => {},
//   taskPayload: {},
    currentIntervalID: 0,
    minuteMarkReloading: [],
    minuteMarkScraping: [],
    minuteMarkResetFlag: []
});




export default SuperCheckerContext;