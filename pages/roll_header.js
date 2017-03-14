'use strict';
import React from 'react';

export default class RollHeader extends React.Component {
  render() {
    return (
      <th className="notrowone">{this.props.header.h}</th>
    )
  }
}
