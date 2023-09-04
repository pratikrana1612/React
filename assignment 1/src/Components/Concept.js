import Content from "./Content";

export default function Concept({ concept }) {
  return (
    <li className="concept">
      <Content content={concept} className="content"></Content>
    </li>
  );
}
