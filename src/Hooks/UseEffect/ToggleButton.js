import React, { useState } from "react";
import CleanupEffect from "./CleanupEffect";

function ToggleButton() {
  const [display, setDisplay] = useState(false);
  return (
    <div>
      <button onClick={(e) => setDisplay(!display)}>Toggle</button>
      {display ? display : <CleanupEffect />}
    </div>
  );
}

export default ToggleButton;
