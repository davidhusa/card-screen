'use strict';
import Head from 'next/head';
import Card from './card';

var cardData = require('./cards.json')

export default () => (
  <div>
    <Head>
      <title>Card Printer</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/static/favicon.ico" type="image/x-icon" />
      <meta charset="utf-8" />
      <meta name="description" content="MOps Card Display Template" />
      <meta name="author" content="dph" />
      <link rel="stylesheet" href="/style.css?v=1.0" />
      <link rel="stylesheet" type="text/css" href="/static/card_style.css" />
      <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Inconsolata|Pacifico|Exo" />
    </Head>
    <div id="container">
      {cardData.map(card => <Card key={card.name} cardData={card} /> ) }
    </div>
  </div>
)

