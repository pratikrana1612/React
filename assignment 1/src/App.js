import keyConceptsImage from "./assets/images/key-concepts.png";
import componentsImage from "./assets/images/components.png";
import stateImage from "./assets/images/state.png";
import eventsImage from "./assets/images/events.png";
import Concepts from "./Components/Concepts";
import Content from "./Components/Content";

const concepts = [
  {
    title: "Components",
    image: componentsImage,
    alt: "Colorful Components Image",
    description:
      "Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.",
  },
  {
    title: "State",
    image: stateImage,
    alt: "Colorful database image",
    description:
      "State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.",
  },
  {
    title: "Events",
    image: eventsImage,
    alt: "Colorful speaker image",
    description:
      "Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.",
  },
];

const header_content = {
  title: "Key React Concepts",
  image: keyConceptsImage,
  alt: "Medal badge with a star",
  description: "Selected key React concepts you should know about",
};
function App() {
  return (
    <div>
      <header>
        <Content content={header_content} className="content"></Content>
      </header>
      <Concepts concepts={concepts}></Concepts>
    </div>
  );
}

export default App;
