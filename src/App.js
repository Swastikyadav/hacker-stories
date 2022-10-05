import { useState } from "react";

import Header from "./components/header/header.component"
import Menu from "./components/menu/menu.component";
import Main from "./components/main/main.component";
import Footer from "./components/footer/footer.component";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./components/404/Error";

import './App.css';

function App() {
  const [isNewStory, setIsNewStory] = useState(true);

  return (
    <>
      <Router>
      <Header />
      <div className="wrapper">
      <Routes>
      <Route path="*" element={<Error/>}/>
      <Route path="/" element={<><Menu setIsNewStory={setIsNewStory} /><Main isNewStory={isNewStory}/></>}/>
      </Routes>
      </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
