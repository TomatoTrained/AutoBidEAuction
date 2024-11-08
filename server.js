const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/send-notification', (req, res) => {
    const { email, message } = req.body;
    console.log(`Sending notification to ${email}: ${message}`);
    // Here you would typically send an email or push notification.
    res.status(200).send('Notification sent');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
