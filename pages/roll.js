'use strict';
import React from 'react';

export default class Roll extends React.Component {
  render() {
    return (
      <tr>
        <td className="rowone">{ this.props.roll.no }</td>
        {(this.props.roll.outcome || []).map((roll, i) => <td key={i} className="notrowone">{ roll.o }</td> )}
      </tr>
    )
  }
}
/* 
<div id="container">
  <% for(var c=0;c < (cards || []).length;c++) { %>
    <div class="outer_card">  
        <div class="card">
           <h4><%= cards[c].type %></h4>
           <h1><%= cards[c].name %></h1>
           <div class="content">
             <%= cards[c].description %>
           </div>
           <table>
              <th class="rowone"></th>
              <% for(var r=0;r < (cards[c].rollHeader || []).length;r++) { %> <!--rollHeader-->
                <th class="notrowone"><%= cards[c].rollHeader[r].h %></th>
              <% } %>
              <% for(var r=0;r < (cards[c].rolls || []).length;r++) { %> <!--rolls-->
                <tr>
                  <td class="rowone"><%= cards[c].rolls[r].no %></td>
                  <% for(var o=0;o < (cards[c].rolls[r].outcome || []).length;o++) { %> <!--outcome-->
                    <td class="notrowone"><%= cards[c].rolls[r].outcome[o].o %></td>
                  <% } %>
                </tr>
              <% } %>
           </table>
           <ul>
           <% for(var l=0;l < (cards[c].list || []).length;l++) { %> <!--list-->
               <li><%= cards[c].list[l].li %></li> 
           <% } %>
           </ul>
           <div class="quote">
              <%= cards[c].quote %>
           </div>
        </div>
    </div>
  <% } %>
</div>
*/