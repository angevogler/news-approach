import React, { Component } from 'react';

class NewsStory extends Component {
  render() {
    const story = this.props.story;
    return(
      <a href={story.url} target="_blank" className="story-link">
        <li key={story.url} className="story-container">
          <img src={story.urlToImage}/>
          <div className="story-info">
          <h3>{story.title}</h3>
          <h5>{story.author}</h5>
          <p>{story.description}</p>
          </div>
        </li>
      </a>
    )
  }
}

export default NewsStory;
