import React from "react";
import { useRef, useImperativeHandle } from "react";

const Input = React.forwardRef(function Input(props, ref) {
  const inputRef = useRef();
  // useEffect(() => {
  //   inputRef.current.focus();
  // });
  const activate = () => {
    inputRef.current.focus();
  };
  useImperativeHandle(ref, () => {
    return {
      focus: activate,
    };
  });

  return (
    <div className={props.className}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      ></input>
    </div>
  );
});

export default Input;
