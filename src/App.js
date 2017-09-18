import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/style.css';

import SelectSource from './components/SelectSource';
import NewsSource from './components/NewsSource';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sources: [],
      sourceId: "abc-news-au",
    };
  }

  // fetch all of the news sources
  getAllSources() {
    fetch('https://newsapi.org/v1/sources')
      .then(response => response.json())
      .then(response => {
        this.setState({
          sources: response.sources,
        });
      });
  }

  componentDidMount() {
    this.getAllSources()
  }

  selectSource(option) {
    console.log(option.target.value);
    this.setState({
        sourceId: option.target.value,
    }, () => console.log(this.state.sourceId));
  }

  render() {
    let sources = this.state.sources;
    // show all sources
    let sourceNames = [];
    for (let i = 0; i < sources.length; i++) {
      sourceNames.push(
        <SelectSource source={sources[i]} key={sources[i].id} />
      );
    }

    return (
      <div className="App">
        <div className="App-header">
          <h1>Welcome to News Approach</h1>
          <div>
            <h3>Select News Source</h3>
            <select onChange={option => this.selectSource(option)}>
            {sourceNames}
            </select>
          </div>
        </div>
        <div>
          <NewsSource from={this.state.sourceId}></NewsSource>
        </div>
      </div>
    );
  }
}

export default App;
