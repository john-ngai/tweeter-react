import React from 'react'; // Optional for React v17 & up.
import Tweet from './Tweet';

function TweetList() {
  return (
    <section className="tweets">
      <Tweet />
      <Tweet />
    </section>
  );
}

export default TweetList;
