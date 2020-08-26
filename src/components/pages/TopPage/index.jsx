import React from 'react';
import { renderToString } from 'react-dom/server';
import CountUp from '../../organisms/CountUp';

export default function TopPage() {
  return (`
    <html>
      <head>
        <title>ReactSSR</title>
        <meta charset="utf-8" />
      </head>
      <body>
        <div id="app">
          ${renderToString(<CountUp />)}
        </div>
        <script src="./client.js"></script>
      </body>
    </html>
  `);
}
