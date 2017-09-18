import React, { Component } from 'react';
import NewsStory from './NewsStory.js';

class NewsSource extends Component {
  constructor(props) {
    super(props);

    this.state = {
      source: '',
      stories: [],
    };
  }

  loadSource(from) {
    from = this.props.from;
    fetch('https://newsapi.org/v1/articles?source=' + from + '&sortBy=top&apiKey=d1baeb398a3844c280bef662b6fc7e23')
    .then(response => response.json())
    .then(response => {
      this.setState({
        source: response.source,
        stories: response.articles,
      });
    });
  }

  componentDidMount() {
      this.loadSource();
  }

  render() {
    const stories = this.state.stories;
    // show all the stories
    let storyElements = [];
    for (let i = 0; i < stories.length; i++) {
      storyElements.push(
        <NewsStory story={stories[i]} key={stories[i].url} />
      )
    }
    console.log('source: ' + this.props.from);
    console.log(this.state.stories);
    return (
      <div>
        <h1>{this.state.source}</h1>
        <ul>
          {storyElements}
        </ul>
      </div>
    )

  }

}

export default NewsSource;
