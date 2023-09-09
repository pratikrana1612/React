export default function Year(props) {
  // console.log(props);
  return (
    <tr>
      <td>{props.year}</td>
      <td>$ {props.savingEndOfYear}</td>
      <td>$ {props.yearlyInterest}</td>
      <td>$ {props.totalInterest}</td>
      <td>$ {props.investedCapital}</td>
    </tr>
  );
}
