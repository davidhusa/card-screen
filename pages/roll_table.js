'use strict';
import React from 'react';
import Roll from './roll';
import RollHeader from './roll_header';


export default class RollTable extends React.Component {
  render() {
    return (
      <table>
        <tbody>
          {this.props.headers.map(header => <RollHeader key={header.h} header={header} /> ) }
          {this.props.rolls.map(roll => <Roll key={roll.no} roll={roll} /> ) }
        </tbody>
      </table>
    )
  }
}
