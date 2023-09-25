import classes from "./Modal.module.css";
import { Fragment } from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onCartHide}></div>;
};

const Modals = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

export default function Modal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onCartHide={props.onCartHide}></Backdrop>,
        document.getElementById("overlays")
      )}
      {ReactDOM.createPortal(
        <Modals>{props.children}</Modals>,
        document.getElementById("overlays")
      )}
    </Fragment>
  );
  //   return (

  //   );
}
