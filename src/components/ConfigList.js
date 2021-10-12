import { useContext } from "react";
import SuperCheckerContext from "../contexts/SuperCheckerContext";
import ListItem from "./ListItem";
import { closestTo, formatDistanceToNow } from "date-fns";

function ConfigList() {
  const {
    intervalID,
    resetIntervalID,
    minuteMarkScrape,
    isAutoScrape,
    toggleIsAutoScrape,
  } = useContext(SuperCheckerContext);

  const datifiedDates = minutesToFullDate(minuteMarkScrape);
  const upcomingInterval = formatDistanceToNow(findClosestDate(datifiedDates), {
    addSuffix: true,
    includeSeconds: true,
  });

  function minutesToFullDate(arr) {
    const baseDateArray = new Date().toLocaleString().split(":");
    return arr.map((i) => {
      return new Date([baseDateArray[0], i, baseDateArray[2]].join(":"));
    });
  }

  function findClosestDate(arr) {
    return closestTo(new Date(), arr);
  }

  function submitSomething() {
    console.log("Submitted!");
  }

  function autoScrapeToggleHandler() {
    toggleIsAutoScrape();
    resetIntervalID(intervalID)
    console.log(intervalID)
  }

  return (
    <div className="col s12">
      <ul className="collection with-header">
        <li className="collection-header">
          <h6>Scraping Config</h6>
        </li>
        <ListItem title="Closest Scraping Window">
          <span className="secondary-content black-text">
            {isAutoScrape && upcomingInterval}
          </span>
        </ListItem>
        <ListItem title="Current Intervals">
          <span className="secondary-content black-text">
            {isAutoScrape && minuteMarkScrape.toString()}
          </span>
        </ListItem>
        <ListItem title="Auto Scrape">
          <div className="secondary-content switch">
            <label>
              Disable
              <input
                type="checkbox"
                checked={isAutoScrape}
                onChange={autoScrapeToggleHandler}
              />
              <span className="lever"></span>
              Enable
            </label>
          </div>
        </ListItem>
        <ListItem>
          <button
            onClick={submitSomething}
            className="btn blue darken-2"
            style={{ width: "100%" }}
          >
            Submit now
          </button>
        </ListItem>
      </ul>
    </div>
  );
}

export default ConfigList;
