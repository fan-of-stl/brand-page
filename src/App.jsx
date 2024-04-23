import React from "react";
import Navbar from "./navBar/Navbar";
import BodyContent from "./body/BodyContent";

const App = () => {
  return (
    <div>
      <header>
        <Navbar />
        <BodyContent />
      </header>
    </div>
  );
};

export default App;
