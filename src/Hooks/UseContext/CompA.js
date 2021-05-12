import React from "react";
import { userContext, emailContext } from "./Parent";

function CompA() {
  return (
    <div>
      <userContext.Consumer>
        {(user) => {
          return (
            <emailContext.Provider>
              {(channel) => {
                return (
                  <div>
                    {" "}
                    Hello {user} and ur mail is {channel}{" "}
                  </div>
                );
              }}
            </emailContext.Provider>
          );
        }}
      </userContext.Consumer>
    </div>
  );
}

export default CompA;
