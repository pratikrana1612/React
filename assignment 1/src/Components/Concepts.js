import Concept from "./Concept";
export default function Concepts({ concepts }) {
  return (
    <ul id="concepts">
      <Concept concept={concepts[0]}></Concept>
      <Concept concept={concepts[1]}></Concept>
      <Concept concept={concepts[2]}></Concept>
    </ul>
  );
}
