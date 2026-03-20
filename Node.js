const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

// Webhook endpoint
app.post('/hashback-webhook', (req, res) => {
  const payload = req.body;
  console.log('Webhook received:', payload);

  // Handle the payload (e.g., update your database)
  if (payload.ResponseCode === 0) {
    console.log('Payment successful! Transaction ID:', payload.TransactionID);
  }

  res.status(200).send('Webhook received');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
