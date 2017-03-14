'use strict';
import React from 'react';

export default class ListItems extends React.Component {
  render() {
    return (
      <ul>
        {this.props.listItems.map((listItem, i) => <li key={i} >{listItem.li}</li>)}
      </ul>
    )
  }
}
