import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('HELLO NGINX');
});

app.listen(3000, '0.0.0.0', (e) => {
  if (e) console.log(e);
  console.log('SERVER ON');
});
