import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import ShadowRoot from "./ShadowRoot";
import GlobalCSS from "./styled/GlobalStyles";
import Modal from "./ui/Modal";
import Fab from "./ui/Fab";

function BLS2Tool() {
  const [fabIsOpen, setFabIsOpen] = useState(false);

  function fabClickHandler() {
    setFabIsOpen(!fabIsOpen);
  }

  return (
    <ShadowRoot>
      <div className="BLS2Tool">
        <GlobalCSS />
        <Fab onClickHandler={fabClickHandler}></Fab>
        <Modal
          isOpen={fabIsOpen}
          fabHandler={fabClickHandler}
          className={fabIsOpen && "open"}
        >
          <Header title="Scraper" />
          <Tasks></Tasks>
        </Modal>
      </div>
    </ShadowRoot>
  );
}

export default BLS2Tool;
