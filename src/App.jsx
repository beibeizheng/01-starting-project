import reactImg from "./assets/react-core-concepts.png";
import { CORE_CONCEPTS } from "./data.js";

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

function Concepts({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <p>{description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main id="core-concepts">
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
      </main>
    </div>
  );
}

export default App;
