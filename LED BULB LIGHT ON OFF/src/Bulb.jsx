import React, { useState } from "react";
import onImage from "./images/ON.png";
import offImage from "./images/OFF.png";

const Bulb = () => {
  const [on, setOn] = useState(true);
  return (
    <div className="main-container">
      <div className="bulb">
      {on ? (
        <img src={onImage} alt="bulb on" />
      ) : (
        <img className="image-off" src={offImage} alt="bulb on" />
      )}

      <div className="ONOFF">
        <button onClick={() => setOn(true)}>ON</button>
        <button onClick={() => setOn(false)}>OFF</button>
      </div>
    </div>
    </div>
  );
};

export default Bulb;
