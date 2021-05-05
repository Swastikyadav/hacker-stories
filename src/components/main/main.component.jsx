import React, { useState, useEffect } from "react";

import StoryCard from "../storyCard/storyCard.component";
import Button from "../button/button.component";

import { getStoryIds } from "../../services/API";

import "./main.styles.css";

function Main() {
  const [storiesId, setStoriesId] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getStoryIds()
      .then(response => response.json())
      .then(data => setStoriesId(data))
      .finally(() => setLoading(false));
  }, []);

  const StoriesContainer = () => {
    return (
      <main className="stories-container">
        {
          storiesId.map(storyId =>
            <StoryCard
              key={storyId}
              storyId={storyId}
            />
          )
        }

        <Button width="100%" height="48px" type="" isActive={true}>Load More</Button>
      </main>
    );
  }

  return (
    <>
      {
        loading ? <p style={{fontSize: "32px", textAlign: "center", marginTop: "150px"}}>Loading...</p> : <StoriesContainer />
      }
    </>
  );
}

export default Main;