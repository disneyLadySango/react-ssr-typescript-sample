import express from 'express';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'components/pages/TopPage' or i... Remove this comment to see the full error message
import TopPage from 'components/pages/TopPage';

const app = express();

app.listen(3000);

app.use(express.static('dist'));

// Getで飛んできたらssrを返却
app.get('/', (_, res) => {
  const response = TopPage();
  res.send(response);
});
