import React from "react";
import Draggable from "react-draggable";
import style from "./WindowArea.module.css";

function TrafficLights({ setCurrentApp, setMax, max }) {
  return (
    <div className={style.traffic_lights}>
      <button
        className={style.red}
        onClick={() => setCurrentApp(null)}
      />
      <button
        className={style.yellow}
        onClick={() => setMax(false)}
      />
      <button
        className={style.green}
        onClick={() => setMax(!max)}
      />
    </div>
  );
}

export default function WindowArea({ currentApp, setCurrentApp }) {
  const [max, setMax] = React.useState(false);


  if (currentApp == null) {
    return <div />;
  }
  return (
    <Draggable>
      <div className={style.drag}>
        <div className={style.light_wrapper}>
          <TrafficLights
            setCurrentApp={setCurrentApp}
            max={max}
            setMax={setMax}
          />
          <span className={style.title}>
            {currentApp.title}
          </span>
        </div>
        <div className={style.desc} >
          {currentApp.content?.() ?? `I'm ${currentApp.title} app`}
        </div>
      </div>
    </Draggable>
  );
}
