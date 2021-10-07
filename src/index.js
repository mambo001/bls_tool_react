import React from "react";
import ReactDOM from "react-dom";
import BLS2Tool from "./BLS2Tool";
import { TasksStateContextProvider } from "./contexts/TaskContext";

const link = document.createElement("link");
link.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
link.rel = "stylesheet";
document.head.append(link)

const rootElement = document.createElement("div");
document.body.append(rootElement);
rootElement.id = "rootElement"

ReactDOM.render(
  <React.StrictMode>
    <TasksStateContextProvider>
      <BLS2Tool />
    </TasksStateContextProvider>
  </React.StrictMode>,
  rootElement
);
