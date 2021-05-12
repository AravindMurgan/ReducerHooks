import React from "react";
import { userContext } from "./Parent";

function CompA() {
  return (
    <div>
      <userContext.Consumer>
        {(user) => {
          return <div>Hello {user} </div>;
        }}
      </userContext.Consumer>
    </div>
  );
}

export default CompA;
