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
    console.log(this.props.from);
    fetch('https://newsapi.org/v1/articles?source=' + from + '&sortBy=top&apiKey=d1baeb398a3844c280bef662b6fc7e23')
    .then(response => response.json())
    .then(response => {
      this.setState({
        source: response.source,
        stories: response.articles,
      });
    })
    .catch( () => console.log('no stories to display'));
  }

  componentDidUpdate(prev) {
    if (prev.from !== this.props.from) {
      this.loadSource();
    }
  }

  componentDidMount() {
      this.loadSource();
  }

  render() {
    let sourceName = undefined

    const stories = this.state.stories;
    // show all the stories
    let storyElements = [];

    if (stories === undefined && sourceName === undefined) {
      storyElements.push(
        <h2>Error: this news source does not have any stories to display</h2>
      )
    } else {
      sourceName = this.state.source.split("-").join(" ").toUpperCase();
        for (let i = 0; i < stories.length; i++) {
          storyElements.push(
            <NewsStory story={stories[i]} key={stories[i].url} />
          )
        }
      }

    return (
      <div>
        <h1 className="source-name">{sourceName}</h1>
        <ul>
          {storyElements}
        </ul>
      </div>
    )

  }

}

export default NewsSource;
