import express from 'express';
// import TopPage from 'components/pages/TopPage';
import TopPage from 'components/pages/TopPage';

const app = express();

app.listen(3000);

app.use(express.static('dist'));

// Getで飛んできたらssrを返却
app.get('/', (_, res) => {
  const response = TopPage();
  res.send(response);
});
