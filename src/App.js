import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/style.css';

import NewsSource from './components/NewsSource';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Welcome to News Approach</h1>
        </div>
        <div>
          <NewsSource from="the-wall-street-journal"></NewsSource>
          <NewsSource from="national-geographic"></NewsSource>
          <NewsSource from="espn"></NewsSource>
          <NewsSource from="buzzfeed"></NewsSource>
        </div>
      </div>
    );
  }
}

export default App;
