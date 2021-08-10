console.log('server started');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
var PORT = process.env.PORT || 4000;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.get('/', (req, res) => {
   res.json({ message: "Welcome to 245 Bay's server." });
});

app.get('/', (req, res) => {
   //listens for when the client opens the site.
   res.sendFile(__dirname + '/client/public/index.html');
});

if (process.env.NODE_ENV === 'production') {
   app.use(express.static('/client/build'));
} else {
   app.use(express.static(__dirname + '/client'));
}

app.listen(PORT, () =>
   console.log('Server is running on http://localhost:' + PORT)
);
