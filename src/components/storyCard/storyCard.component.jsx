import React from "react";
import useFetch from "../../customHooks/useFetch";

import { getStory } from "../../services/API";
import { calculateTimeDifference } from "../../utils";

import SkeletonLoader from "../skeletonLoader/skeletonLoader.component";

import "./storyCard.styles.css";

function Story({ storyId }) {
  const [story] = useFetch(getStory, storyId);

  const handleMetadata = (metadata) => {
    if (metadata !== undefined) {
      const filteredMetadata = metadata
        .replace(/&#x([0-9a-f]+);/gi, (_, code) =>
          String.fromCharCode(parseInt(code, 16))
        )
        .replace("<p>", "");

      if (filteredMetadata.length >= 125) {
        return filteredMetadata.slice(0, 125) + "...";
      }

      return filteredMetadata;
    }

    return "No MetaData is available.";
  };

  const Card = () => {
    return (
      <a href={`https://news.ycombinator.com/item?id=${story.data.id}`} className="card-anchor" target="_blank" rel="noreferrer">
        <article className="story">
          <p className="title">
            {story.data.title || "No Title is available."}
          </p>
          <p className="text">{handleMetadata(story.data.text)}</p>
          <p className="story-footer">
            &#128336; {calculateTimeDifference(Date.now(), story.data.time)} ago | {story.data.descendants} comments
          </p>
        </article>
      </a>
    );
  }

  return (
    <>
      { story.errorMessage ? <p style={{fontSize: "32px", textAlign: "center", marginTop: "150px", color: "red"}}>{ story.errorMessage }</p> : "" }
      {
        story.isLoading ? <SkeletonLoader /> : <Card />
      }
    </>
  );
}

export default Story;