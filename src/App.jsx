import { useState } from "react";
import reactImg from "./assets/react-core-concepts.png";
import { CORE_CONCEPTS, EXAMPLES } from "./data.js";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[getRandomInt(2)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

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

function Button({ title, functionClick }) {
  return <button onClick={functionClick}>{title}</button>;
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
  const defaultText = "Please select a button";
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
