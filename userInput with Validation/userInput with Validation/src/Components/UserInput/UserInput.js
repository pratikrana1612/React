import ListUsers from "../ListUsers/ListUsers";
import { useState, useRef } from "react";
import "./UserInput.css";

export default function UserInput(props) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [userInput, changeUserInput] = useState({
  //   name: "",
  //   age: 0,
  // });
  // const onChangeInput = (key, value) => {
  //   changeUserInput((preValue) => ({
  //     ...preValue,
  //     [key]: value,
  //   }));
  // };
  function onSubmitHandler(event) {
    event.preventDefault();
    const userInputRef = nameInputRef.current.value;
    const userageRef = ageInputRef.current.value;
    if (!userInputRef && !userageRef) {
      props.addUser(
        {},
        false,
        "Please enter a valid name and age (non-empty values)"
      );
      return;
    } else if (+userageRef < 0) {
      props.addUser({}, false, "Invalid Age (Please Enter Valid Age >0)");
      return;
    }
    let userInput = { name: userInputRef, age: userageRef };
    props.addUser(userInput);
    userInputRef.current.value = "";
    userageRef.current.value = "";

    // changeUserInput({
    //   name: "",
    //   age: 0,
    // });
  }
  return (
    <div className="main_div">
      <form action="" onSubmit={onSubmitHandler}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          // onChange={(event) => onChangeInput("name", event.target.value)}
          ref={nameInputRef}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          type="number"
          name="age"
          id="age"
          ref={ageInputRef}
          // onChange={(event) => onChangeInput("age", event.target.value)}
        />
        <div className="action">
          <button className="button" type="submit" value="">
            Add User
          </button>
        </div>
      </form>
    </div>
  );
}
