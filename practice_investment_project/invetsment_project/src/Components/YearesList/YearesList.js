import Year from "../Year/Year";
import styles from "./YearesList.module.css";

export default function YearesList(props) {
  const sumOfInterest = (data) => {
    console.log(data);
    let sum = data.reduce((sum, d) => sum + d.yearlyInterest, 0);
    sum = +sum.toFixed(2);
    return sum;
  };
  const filterYear = (currentYear) => {
    const total_interest = sumOfInterest(
      props.yearlyData.filter((year) => year.year <= currentYear)
    );
    return total_interest;
  };
  return (
    <table className={styles.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.yearlyData.map((year) => (
          <Year
            key={year.year}
            year={year.year}
            savingEndOfYear={year.savingsEndOfYear}
            yearlyInterest={year.yearlyInterest}
            totalInterest={filterYear(year.year)}
            investedCapital={parseInt(
              props.intialSavings + year.year * year.yearlyContribution
            ).toFixed(2)}
          ></Year>
        ))}
        {/* <Year></Year> */}
      </tbody>
    </table>
  );
}
