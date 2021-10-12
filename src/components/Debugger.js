import { useContext } from "react";
import { useEffect } from "react/cjs/react.development";
import SuperCheckerContextProvider from "../contexts/SuperCheckerContext";
import Button from "../ui/Button";
import TimeObserver from "./TimeObserver";

function Debugger({ title }) {
  const {
    minuteMarksObject,
    minuteMarkReload,
    updateMinuteMarkReload,
    resetMinuteMarkReload
  } = useContext(SuperCheckerContextProvider);


  const lists = () => {
    let listArray = [];
    for (const li in minuteMarksObject) {
      listArray.push({
        name: li,
        bool: minuteMarksObject[li],
      });
    }
    return listArray.map(({ name, bool }) => (
      <li key={Math.random(1, 10000)} className={bool ? "green" : "red"}>
        {name}
        <span>{bool}</span>
      </li>
    ));
  };

  useEffect(() => {
    console.log(minuteMarkReload)
  }, [minuteMarkReload]);

  function setTaskHandler() {
    // resetMinuteMarkReload()
    updateMinuteMarkReload([1,2,40,41,42])
    console.log(minuteMarkReload)
  }
  
  function resetTaskHandler() {
    resetMinuteMarkReload()
    console.log("action:", minuteMarksObject);
  }

  return (
    <header className="header row">
      <div
        className="col s12 valign-wrapper"
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h6>{title}</h6>
        <TimeObserver />
        <ul>{lists()}</ul>
        <div>
          <Button
            onClick={resetTaskHandler}
            className="header-actions"
            color="grey darken-2"
            text="Reset"
          />
        </div>
      </div>

      <div className="col s12" style={{ padding: "0 15px" }}>
        <Button
          onClick={setTaskHandler}
          color="blue darken-2"
          text="Add Task"
        />
      </div>
    </header>
  );
}

export default Debugger;
