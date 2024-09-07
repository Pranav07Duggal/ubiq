import { useEffect, useState } from "react";
import "./App.css";
import StatusBar from "./components/statusBar/StatusBar";
import GLOBE from "vanta/src/vanta.globe";
import WindowArea from "./components/comp/WindowArea";
import Dock from "../src/components/comp/Dock";
import ContextMenu from "./components/contextMenu/ContextMenu";
import BootUp from "./components/bootUp/BootUp";
import FileDropZone from "./components/FileDropZone/FileDropZone";


const Home = () => {
  useEffect(() => {
    GLOBE({
      el: "#vanta",
      mouseControls: true,
      touchControls: true,
      gyroControls: true,
      scale: 1.0,
      scaleMobile: 1.0,
    });
  }, []);

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [currentApp, setCurrentApp] = useState(null);
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  
  const closeContextMenu = () => {
    setIsMenuToggled(false);
  }

  const  handleRightClick = (event) =>{
    event.preventDefault();
    var y = event.clientX;
    var x = event.clientY;
    setCursorPosition({ x, y });
    console.log(x,y);
    setIsMenuToggled(!isMenuToggled);
  };

  return (
    <>
    <BootUp/>
      <div className="wrapper" onClick={closeContextMenu} onContextMenu={handleRightClick}>
        <div className="bg" id="vanta"></div>
        <FileDropZone/>
        <StatusBar  currentApp={currentApp} />
        <div className="inner_wrapper"  >
          <WindowArea currentApp={currentApp} setCurrentApp={setCurrentApp} />
        </div>
        <ContextMenu toggleVisibility={isMenuToggled} position={cursorPosition} />
        <Dock setCurrentApp={setCurrentApp} />
      </div>
    </>
  );
};

export default Home;
