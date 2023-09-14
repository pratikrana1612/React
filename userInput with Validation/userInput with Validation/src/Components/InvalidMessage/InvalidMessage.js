import React from "react";
import ReactDOM from "react-dom";
import "./InvalidMessage.css";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onClick}></div>;
};
const ModalOverlay = (props) => {
  return (
    <div className="message_box">
      <div className="message_title">
        <h3>Invalid input</h3>
      </div>
      <div className="main_div message_text">
        <p>{props.text}</p>
        <button className="button" onClick={props.onClick}>
          Okay
        </button>
      </div>
    </div>
  );
};
export default function InvalidMessage(props) {
  function onClickHandler() {
    props.userUnderstanded(true);
  }
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={onClickHandler}></Backdrop>,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          onClick={onClickHandler}
          text={props.text}
        ></ModalOverlay>,
        document.getElementById("overlay-root")
      )}
      {/* <Backdrop></Backdrop> */}
      {/* <ModalOverlay onClick={onClickHandler} text={props.text}></ModalOverlay> */}
    </React.Fragment>
  );
}
