import "bootstrap/dist/css/bootstrap.min.css";

import MyForm from "./MyForm";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Brainhub Event</h1>
      <section className="section">
        <MyForm />
      </section>
    </div>
  );
}

export default App;
