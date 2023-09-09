import { useState } from "react";
import styles from "./FormInput.module.css";

export default function FormInput(props) {
  const [currentSavings, changeCurrentSavings] = useState(0);
  const [yearlyContribution, changeyearlyContribution] = useState(0);
  const [interest, changeInterest] = useState(0);
  const [investmentDuration, changeInvesmentDuration] = useState(0);

  function onChangeHandler(event) {
    const id = event.target.id;
    const value = event.target.value;
    if (id === "current-savings") {
      changeCurrentSavings(value);
    } else if (id == "yearly-contribution") {
      changeyearlyContribution(value);
    } else if (id === "expected-return") {
      changeInterest(value);
    } else if (id === "duration") {
      changeInvesmentDuration(value);
    }
  }
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const userInput = {
      "current-savings": currentSavings,
      "yearly-contribution": yearlyContribution,
      "expected-return": interest,
      duration: investmentDuration,
    };
    props.calculateHandler(userInput);
  };
  const onResetHandler = (event) => {
    changeCurrentSavings("");
    changeInterest("");
    changeInvesmentDuration("");
    changeyearlyContribution("");
  };
  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={currentSavings}
            onChange={onChangeHandler}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={yearlyContribution}
            onChange={onChangeHandler}
          />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={interest}
            onChange={onChangeHandler}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            onChange={onChangeHandler}
            value={investmentDuration}
          />
        </p>
      </div>
      <p className={styles.actions}>
        <button
          type="reset"
          className={styles.buttonAlt}
          onClick={onResetHandler}
        >
          Reset
        </button>
        <button type="submit" className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  );
}
