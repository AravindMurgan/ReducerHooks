import React, { useEffect, useState } from "react";

function CleanupEffect() {
  const [X, setX] = useState(0);
  const [Y, setY] = useState(0);

  const logMousePosition = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("mouseMove");
    window.addEventListener("mousemove", logMousePosition);

    return () => {
      window.removeEventListener("mousemove", logMousePosition);
    };
  });

  return (
    <div>
      <h3>
        {" "}
        Hook-{X}, Hook-{Y}{" "}
      </h3>
    </div>
  );
}

export default CleanupEffect;
