import React from "react";
import CompA from "./CompA";
export const userContext = React.createContext();
export const emailContext = React.createContext();
function Parent() {
  return (
    <div>
      <userContext.Provider value={"Aravind Murugan"}>
        <emailContext.Provider>
          <CompA />
        </emailContext.Provider>
      </userContext.Provider>
    </div>
  );
}

export default Parent;
