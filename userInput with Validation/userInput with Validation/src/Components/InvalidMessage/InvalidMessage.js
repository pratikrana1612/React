import "./InvalidMessage.css";

export default function InvalidMessage(props) {
  function onClickHandler() {
    props.userUnderstanded(true);
  }
  return (
    <div>
      <div class="backdrop" onClick={onClickHandler}></div>
      <div class="message_box">
        <div class="message_title">
          <h3>Invalid input</h3>
        </div>
        <div class="main_div message_text">
          <p>{props.text}</p>
          <button class="button" onClick={onClickHandler}>
            Okay
          </button>
        </div>
      </div>
    </div>
  );
}
