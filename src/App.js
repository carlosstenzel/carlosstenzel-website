import React from "react";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

import VacantJob from "./components/VacantJob";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <VacantJob />
      <Home />
      <Footer />
    </>
  );
}

export default App;
