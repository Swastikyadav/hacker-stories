import React, { useState, useEffect } from "react";

import { getStory } from "../../services/API";
import { calculateTimeDifference } from "../../utils";

import SkeletonLoader from "../skeletonLoader/skeletonLoader.component";

import "./storyCard.styles.css";

function Story({ storyId }) {
  const [story, setStory] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStory = async () => {
      const response = await getStory(storyId);
      const result = await response.json();

      try {
        setStory({
          comments: result.descendants,
          id: result.id,
          text: result.text || "No MetaData is available for this story.",
          time: result.time,
          title: result.title || "No Title is available.",
          url: result.url,
        })
      } catch (error) {
        alert(`${error.name}: ${error.message}`)
      }

      setLoading(false);
    }

    fetchStory();

    return () => {
      setStory({});
      setLoading(true);
    }
  }, [storyId]);

  const Card = () => {
    return (
      <a href={`https://news.ycombinator.com/item?id=${story.id}`} className="card-anchor" target="_blank" rel="noreferrer">
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

  return (
    <>
      {
        loading ? <SkeletonLoader /> : <Card />
      }
    </>
  );
}

export default Story;