import "./App.css";
import ScrollReveal from "./scroll-reveal";

function App() {
  return (
    <div className="App">
      <img className="logo" src="jaLogo.png" alt="logo" />
      <section id="intro">
        <h1>React Scroll Reveal</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="180"
          height="180"
          fill="currentColor"
          class="bi bi-mouse"
          viewBox="0 0 16 16"
        >
          <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm4 8a4 4 0 0 1-8 0V5a4 4 0 1 1 8 0v6zM8 0a5 5 0 0 0-5 5v6a5 5 0 0 0 10 0V5a5 5 0 0 0-5-5z" />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          fill="currentColor"
          class="bi bi-arrow-down"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
          />
        </svg>
      </section>

      <section id="sec2">
        <ScrollReveal cascade anim="animate__zoomIn" damping={0.5}>
          <img src="1.jpg" alt="photo" />
          <img src="2.jpg" alt="photo" />
          <img src="3.jpg" alt="photo" />
        </ScrollReveal>
      </section>

      <section id="sec3">
        <ScrollReveal anim="animate__fadeInDown" threshold={0.9}>
          <h2>Beautiful Mind</h2>
        </ScrollReveal>

        <div>
          <ScrollReveal anim="animate__fadeInLeft">
            <img src="4.jpg" alt="photo" />
          </ScrollReveal>

          <ScrollReveal anim="animate__fadeInUp">
            <img src="5.jpg" alt="photo" />
          </ScrollReveal>

          <ScrollReveal anim="animate__fadeInRight">
            <img src="6.jpg" alt="photo" />
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

export default App;
