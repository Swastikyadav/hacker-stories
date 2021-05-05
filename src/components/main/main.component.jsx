import React, { useState, useLayoutEffect } from "react";

import StoryCard from "../storyCard/storyCard.component";
import Button from "../button/button.component";

import { getStoryIds } from "../../services/API";

import "./main.styles.css";

function Main({ isNewStory }) {
  const [storiesId, setStoriesId] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleStoriesCount, setVisibleStoriesCount] = useState(10);

  useLayoutEffect(() => {
    let isSubscribed = true;

    getStoryIds(isNewStory)
      .then(response => response.json())
      .then(data => {
        if (isSubscribed) {
          setStoriesId(data)
        }
      })
      .catch(error => console.log(error, error.message))
      .finally(() => setLoading(false));

    return () => isSubscribed = false;
  }, [isNewStory]);

  const loadMoreStories = () => {
    setVisibleStoriesCount(visibleStoriesCount + 10);
  }

  const StoriesContainer = () => {
    return (
      <main className="stories-container">
        {
          storiesId.slice(0, visibleStoriesCount).map(storyId =>
            <StoryCard
              key={storyId}
              storyId={storyId}
            />
          )
        }

        <Button
          width="100%"
          height="48px"
          type=""
          isActive={true}
          handleBtnClick={loadMoreStories}
        >
          Load More
        </Button>
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