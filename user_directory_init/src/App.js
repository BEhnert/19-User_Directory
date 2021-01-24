import React from "react";
import OmdbContainer from "./components/OmdbContainer";
import Header from "./components/Header";
import Search from "./components/Search";

function App() {
  return (
  <div>
      <Header />;
      <Search />;
     <OmdbContainer />;
  </div>
  )
}

export default App;
