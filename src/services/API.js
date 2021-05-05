export const baseUrl = "https://hacker-news.firebaseio.com/v0/";
export const newStoriesUrl = `${baseUrl}newstories.json`;
export const bestStoriesUrl = `${baseUrl}beststories.json`;
export const storyUrl = `${baseUrl}item/`;

export const getStoryIds = async (isNewStory) => {
  const url = isNewStory ? newStoriesUrl : bestStoriesUrl;
  const result = await fetch(url);
  return result;
}

export const getStory = async (storyId) => {
  const result = await fetch(`${storyUrl}${storyId}.json`);
  return result;
}