import { useState } from "react";
import { CORE_CONCEPTS, EXAMPLES } from "./data.js";
import Header from "./header.jsx";

function ConceptSession() {
  return (
    <ul>
      {CORE_CONCEPTS.map((item) => (
        <Concepts
          key={item.title} // Adding a unique key prop
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
    </ul>
  );
}

function Concepts({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function Button({ title, functionClick, isSelected }) {
  return (
    <button className={isSelected ? "active" : ""} onClick={functionClick}>
      {title}
    </button>
  );
}

function TabDetail({ index }) {
  const example = Object.values(EXAMPLES)[index];
  return (
    <>
      <h3>{example.title}</h3>
      <p>{example.description}</p>
      <pre>
        <code>{example.code}</code>
      </pre>
    </>
  );
}

function ButtonSession() {
  const defaultText = "Please select a topic";
  const [index, setIndex] = useState(null);

  const handleButtonClick = (index) => {
    setIndex(index);
  };

  return (
    <>
      <div id="examples">
        <menu>
          {Object.values(EXAMPLES).map((item, idx) => (
            <Button
              key={item.title}
              isSelected={index === idx}
              title={item.title}
              functionClick={() => handleButtonClick(idx)}
            />
          ))}
        </menu>
      </div>
      <div id="tab-content">
        {index === null ? defaultText : <TabDetail index={index} />}
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <Header />
      <main id="core-concepts">
        <ConceptSession />
        <ButtonSession />
      </main>
    </>
  );
}

export default App;
