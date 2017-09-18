import React, { Component } from 'react';

class SelectSource extends Component {

  render() {
    const source = this.props.source;
    return (
      <option value={source.id}>{source.name}</option>
    )
  }
}

export default SelectSource;
