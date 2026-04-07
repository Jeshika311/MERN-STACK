const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();
console.log('NODE_ENV is:', process.env.NODE_ENV);

const app = express();

// ✅ Define custom token FIRST
morgan.token('time', function () {
  return new Date().toLocaleTimeString();
});

// ✅ Create logs directory before defining stream
const logDirectory = path.join(__dirname, 'logs');
if (!fs.existsSync(logDirectory)) {
  fs.mkdirSync(logDirectory);
}

const accessLogStream = fs.createWriteStream(path.join(logDirectory, 'access.log'), { flags: 'a' });

// ✅ Use token correctly in format (case-sensitive)
const logFormat = 'Time- :time | Method- :method | URL- :url | Status- :status | Response Length- :res[content-length] | Response Time- :response-time ms';

if (process.env.NODE_ENV === 'production') {
  // ✅ Apply morgan AFTER defining token & stream
  app.use(morgan(logFormat, { stream: accessLogStream }));
  } 
else {
  app.use(morgan('dev' , {stream: accessLogStream}));
}

// Apply for specific routes
app.use('/users', morgan(logFormat, { stream: accessLogStream }));

// --- Routes ---
app.get('/', (req, res) => {
  res.json({ status: 200, message: 'Hello, World!' });
});

app.get('/about', (req, res) => {
  res.json({ status: 200, message: 'This is the about page.' });
});

app.get('/users', (req, res) => {
  res.json({
    status: 200,
    message: 'User data',
    users: [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 3, name: 'Charlie' },
    ],
  });
});

PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
