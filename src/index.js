import React from "react";
import ReactDOM from "react-dom";
import BLS2Tool from "./BLS2Tool";
import { SuperCheckerContextProvider } from "./contexts/SuperCheckerContext";

const link = document.createElement("link");
link.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
link.rel = "stylesheet";
document.head.append(link)

const rootElement = document.createElement("div");
document.body.append(rootElement);
rootElement.id = "rootElement"

ReactDOM.render(
  <React.StrictMode>
    <SuperCheckerContextProvider>
      <BLS2Tool />
    </SuperCheckerContextProvider>
  </React.StrictMode>,
  rootElement
);
