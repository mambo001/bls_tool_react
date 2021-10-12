import Debugger from "./components/Debugger";
import ScrapingTable from "./components/ScrapingTable";
import ShadowRoot from "./ShadowRoot";
import GlobalCSS from "./styled/GlobalStyles";
import Modal from "./ui/Modal";
import Fab from "./ui/Fab";
import ConfigList from "./components/ConfigList";
import useIsFabOpen from "./persisted-states/useIsFabOpen";

function BLS2Tool() {
  const { isFabOpen, toggleIsFabOpenHandler } = useIsFabOpen(false);

  return (
    <ShadowRoot>
      <div className="BLS2Tool">
        <GlobalCSS />
        <Fab onClickHandler={toggleIsFabOpenHandler}></Fab>
        <Modal
          isOpen={isFabOpen}
          fabHandler={toggleIsFabOpenHandler}
          className={isFabOpen && "open"}
        >
          <Debugger title="Debugger" />
          <ConfigList />
          <ScrapingTable />
        </Modal>
      </div>
    </ShadowRoot>
  );
}

export default BLS2Tool;
