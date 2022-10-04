import React from "react";
import useFetch from "../../customHooks/useFetch";
import StoryCard from "../storyCard/storyCard.component";
import Button from "../button/button.component";

import { getStoryIds } from "../../services/API";

import "./main.styles.css";

function Main({ isNewStory, visibleStoriesCount, setVisibleStoriesCount }) {
  const [storiesId] = useFetch(getStoryIds, isNewStory);

  const loadMoreStories = () => {
    setVisibleStoriesCount(visibleStoriesCount + 10);
  };

  const StoriesContainer = () => {
    return (
      <main data-testid="main" className="stories-container">
        {storiesId.data.slice(0, visibleStoriesCount).map((storyId) => (
          <StoryCard key={storyId} storyId={storyId} />
        ))}

        {!storiesId.errorMessage && (
          <Button
            width="100%"
            height="48px"
            type=""
            isActive={true}
            handleBtnClick={loadMoreStories}
          >
            Load More
          </Button>
        )}
      </main>
    );
  };

  return (
    <>
      {storiesId.errorMessage ? (
        <p
          style={{
            fontSize: "32px",
            textAlign: "center",
            marginTop: "150px",
            color: "red",
          }}
        >
          {storiesId.errorMessage}
        </p>
      ) : (
        ""
      )}
      {storiesId.isLoading ? (
        <p
          style={{ fontSize: "32px", textAlign: "center", marginTop: "150px" }}
        >
          Loading...
        </p>
      ) : (
        <StoriesContainer />
      )}
    </>
  );
}

export default Main;
