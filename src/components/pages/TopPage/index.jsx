import React from 'react';
import { renderToString } from 'react-dom/server';
import CountUp from 'components/organisms/CountUp';

const TopPage = () => {
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
        <script src="http://localhost:8080/client.js"></script>
      </body>
    </html>
  `);
}

export default TopPage;
