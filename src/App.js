import "./App.css";
import Discussions from "./Components/Discussions";
import Form from "./Components/Form";

function App() {
  return (
    <div>
      <h1 className="main__title">JJeong's Agora States</h1>
      <section className="form__container">
        <Form />
      </section>
      <section className="discussion__wrapper">
        <Discussions />
      </section>
    </div>
  );
}

export default App;
