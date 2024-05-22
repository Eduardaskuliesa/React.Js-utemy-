import CoreConcept from "./CoreConcept";
import Header from "./Header";
import { CORE_CONCEPTS } from "./data";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((cocept, index) => (
              <CoreConcept
                key={index}
                title={cocept.title}
                image={cocept.image}
                description={cocept.description}
              />
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
