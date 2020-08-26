import React from 'react';
import { renderToString } from 'react-dom/server';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'components/organisms/CountUp' ... Remove this comment to see the full error message
import CountUp from 'components/organisms/CountUp';

export default function TopPage() {
  return (`
    <html>
      <head>
        <title>ReactSSR</title>
        <meta charset="utf-8" />
      </head>
      <body>
        <div id="app">
          ${renderToString(          
// @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
<CountUp />)}
        </div>
        <script src="./client.js"></script>
      </body>
    </html>
  `);
}
