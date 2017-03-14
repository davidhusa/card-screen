'use strict';
import React from 'react';
import RollTable from './roll_table';
import ListItems from './list_items';

export default class Card extends React.Component {
  render() {
    return (
      <div className="outer_card">  
        <div className="card">
          <h4>{this.props.cardData.type}</h4>
          <h1>{this.props.cardData.name}</h1>
          <div className="content">{this.props.cardData.description}</div>
          <RollTable headers={this.props.cardData.rollHeader || []} rolls={this.props.cardData.rolls || []} />
          <ListItems listItems={this.props.cardData.list || []}/>
          <div className="quote">{this.props.cardData.quote}</div>
        </div>
      </div>
    )
  }
}

