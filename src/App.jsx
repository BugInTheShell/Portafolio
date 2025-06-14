import { useState } from "react";
import Index from "./components";
import "./App.css";
import "@fontsource/press-start-2p";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Index />
    </>
  );
}

export default App;
