import React, { useState, useEffect } from "react";

import { getStory } from "../../services/API";
import { calculateTimeDifference } from "../../utils";

import "./storyCard.styles.css";

function Story({ storyId }) {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId)
      .then(response => response.json())
      .then((data) => data && setStory({
        comments: data.descendants,
        id: data.id,
        text: data.text || "No MetaData is available for this story.",
        time: data.time,
        title: data.title || "No Title is available.",
        url: data.url,
      }))
  }, [storyId]);

  return (
    <a href={`https://news.ycombinator.com/item?id=${story.id}`} className="card-anchor" target="_blank">
      <article className="story">
        <p className="title">
          {story.title}
        </p>
        <p className="text">
          {story.text}
        </p>
        <p className="story-footer">
          &#128336; {calculateTimeDifference(Date.now(), story.time)} ago | {story.comments} comments
        </p>
      </article>
    </a>
  );
}

export default Story;