import React from 'react'; // Optional for React v17 & up.

function TweetForm() {
  const placeholderText = 'What are you humming about?';
  
  return (
    <section className="newtweet">
      <form method="post" action="/tweets" className="newtweet__form" onClick={(event) => event.preventDefault()}>
        <textarea className="form__textarea" name="text" placeholder={placeholderText}></textarea>
        <input type="submit" value="Tweet" className="form__input" />
        <span className="form__counter">140</span>
      </form>
    </section>
  );
}

export default TweetForm;
