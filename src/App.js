import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Button from "./components/Button/Button";
import { useState } from "react";

import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  function onClick(event) {
    setCounter(counter + 1);
  }

  return (
    <div className="App">
      <Header />
      <button onClick={onClick}>Increment button</button>
      {counter}
      <Main />
      <Footer />
    </div>
  );
}

export default App;
