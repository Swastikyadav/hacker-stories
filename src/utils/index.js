export const calculateTimeDifference = (dateNow, storyTimestamp) => {
  storyTimestamp *= 1000; // convert timestamp into milliSeconds.

  const difference = Math.abs(dateNow - storyTimestamp) / 1000;

  const days = Math.floor(difference / 86400); // 1 day is 86400 unix seconds
  const hours = Math.floor(difference / 3600) % 24;
  const minutes = Math.floor(difference / 60) % 60;
  const seconds = Math.floor(difference % 60);

  let time;
  if (days) {
    time = days + "days";
  } else if (hours) {
    time = hours + "hours";
  } else if (minutes) {
    time = minutes + "minutes";
  } else if (seconds) {
    time = seconds + "seconds";
  }

  return time;
}