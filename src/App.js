import { useState } from "react";

import Header from "./components/header/header.component"
import Menu from "./components/menu/menu.component";
import Main from "./components/main/main.component";
import Footer from "./components/footer/footer.component";

import './App.css';

let cardCount = 10;

function App() {
  const [isNewStory, setIsNewStory] = useState(true);
  const [visibleStoriesCount, setVisibleStoriesCount] = useState(10);
  console.log(cardCount);

  const loadMoreStories = () => {
    setVisibleStoriesCount(visibleStoriesCount + 10);
    console.log(cardCount);
    cardCount += 10;
    console.log(cardCount);
  }
  return (
    <>
      <Header />

      <div className="wrapper">
        <Menu setIsNewStory={setIsNewStory} cardCount={cardCount}/>
        <Main isNewStory={isNewStory} visibleStoriesCount={visibleStoriesCount} setVisibleStoriesCount={setVisibleStoriesCount} loadMoreStories={loadMoreStories} />
      </div>

      <Footer />
    </>
  );
}

export default App;
