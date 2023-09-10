import ListUsers from "../ListUsers/ListUsers";
import { useState } from "react";
import "./UserInput.css";

export default function UserInput(props) {
  const [userInput, changeUserInput] = useState({
    name: "",
    age: 0,
  });
  const onChangeInput = (key, value) => {
    changeUserInput((preValue) => ({
      ...preValue,
      [key]: value,
    }));
  };
  function onSubmitHandler(event) {
    event.preventDefault();
    if (!userInput.name && !userInput.age) {
      props.addUser(
        {},
        false,
        "Please enter a valid name and age (non-empty values)"
      );
      return;
    } else if (userInput.age < 0) {
      props.addUser({}, false, "Invalid Age (Please Enter Valid Age >0)");
      return;
    }
    props.addUser(userInput);
    console.log("Submited");
  }
  return (
    <div class="main_div">
      <form action="" onSubmit={onSubmitHandler}>
        <label for="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          onChange={(event) => onChangeInput("name", event.target.value)}
        />
        <label for="age">Age (Years)</label>
        <input
          type="text"
          name="age"
          id="age"
          onChange={(event) => onChangeInput("age", event.target.value)}
        />
        <div class="action">
          <button class="button" type="submit" value="">
            Add User
          </button>
        </div>
      </form>
    </div>
  );
}
