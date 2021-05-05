import { useState } from "react";

import Header from "./components/header/header.component"
import Menu from "./components/menu/menu.component";
import Main from "./components/main/main.component";
import Footer from "./components/footer/footer.component";

import './App.css';

function App() {
  const [isNewStory, setIsNewStory] = useState(true);

  return (
    <>
      <Header />

      <div className="wrapper">
        <Menu setIsNewStory={setIsNewStory} />
        <Main isNewStory={isNewStory} />
      </div>

      <Footer />
    </>
  );
}

export default App;
