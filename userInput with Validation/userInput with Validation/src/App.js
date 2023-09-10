import React, { useState } from "react";
import "./index.css";
import UserInput from "./Components/UserInput/UserInput";
import ListUsers from "./Components/ListUsers/ListUsers";
import InvalidMessage from "./Components/InvalidMessage/InvalidMessage";

function App() {
  const [users, changeUsers] = useState([]);
  const [isValid, changeIsValid] = useState({ isValid: true, message: "" });
  // const users = [{ name: "Max", age: 31 }];

  function addUser(user = {}, validation = true, message = "") {
    if (!validation) {
      changeIsValid({ isValid: validation, message: message });
      return;
    }
    changeUsers((preValues) => [...preValues, user]);
  }
  function userUnderstanded(isClick) {
    changeIsValid({ isValid: isClick, message: "" });
  }
  return (
    <div>
      {!isValid.isValid && (
        <InvalidMessage
          text={isValid.message}
          userUnderstanded={userUnderstanded}
        ></InvalidMessage>
      )}
      <UserInput addUser={addUser}></UserInput>
      <ListUsers users={users}></ListUsers>
    </div>
  );
}

export default App;
