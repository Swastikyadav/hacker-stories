import React from "react";

import "./storyCard.styles.css";

function Story() {
  return (
    <a href="#" className="card-anchor" target="_blank">
      <article className="story">
        <p className="title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, veniam natus neque saepe distinctio alias aperiam quod voluptates dolorem reprehenderit odit suscipit quis numquam magni nobis enim, itaque, repellendus esse!
        </p>
        <p className="story-footer">
          &#128336; 1 min ago | 50 comments
        </p>
      </article>
    </a>
  );
}

export default Story;