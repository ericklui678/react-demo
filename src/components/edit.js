import React, { Component } from 'react';

export default class Edit extends Component {
  render() {
    console.log(this.props.match.params);
    return (
      <div>
        Edit
      </div>
    );
  }
}
