import Header from "./Components/Header/Header";
import FormInput from "./Components/FormInput/FormInput";
import YearesList from "./Components/YearesList/YearesList";
import { useState } from "react";

function App() {
  const [finalData, changeFinalData] = useState({
    finalData: [],
    intialSavings: 0,
  });
  let yearListContent = (
    <p style={{ textAlign: "center" }}>No Invetsment Calculated Yet</p>
  );
  if (finalData.finalData.length > 0) {
    yearListContent = (
      <YearesList
        yearlyData={finalData.finalData}
        intialSavings={finalData.intialSavings}
        np
      ></YearesList>
    );
  }
  // const yearlyData = [
  //   {
  //     year: 1,
  //     yearlyInterest: 43,
  //     savingsEndOfYear: 2342,
  //     yearlyContribution: 500,
  //   },
  //   {
  //     year: 2,
  //     yearlyInterest: 43,
  //     savingsEndOfYear: 2342,
  //     yearlyContribution: 500,
  //   },
  // ];
  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    // per-year results
    const yearlyData = [];
    console.log(userInput);
    let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
    let intialSavings = currentSavings;
    const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = +(currentSavings * expectedReturn).toFixed(2);
      currentSavings += yearlyInterest + yearlyContribution;
      currentSavings = +currentSavings.toFixed(2);
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    changeFinalData({ finalData: yearlyData, intialSavings: intialSavings });

    // do something with yearlyData ...
  };

  return (
    <div>
      <Header></Header>
      <FormInput calculateHandler={calculateHandler}></FormInput>
      {yearListContent}
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
    </div>
  );
}

export default App;
