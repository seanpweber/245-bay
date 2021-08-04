console.log("server started");

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const routes = require('./app/routes/api/project.routes');
// const sequelize = require('./app/config/connection');

const app = express();
var PORT = process.env.PORT || 4000;
const serv = require('http').Server(app);

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

// app.use(cors());

// app.get('/projects/:id', function (req, res, next) {
//   res.json({msg: 'This is CORS-enabled for all origins!'})
// })

// app.use('/api/projects', routes);

app.get("/", (req, res) => {
    res.json({ message: "Welcome to zzzleepy's server." });
  });

app.get('/', (req, res) => {//listens for when the client opens the site.
    res.sendFile(__dirname + '/client/public/index.html');
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("/client/build"));
} else {
  app.use(express.static(__dirname + "/client"));
}

// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => console.log('Now listening'));
// });

serv.listen(PORT, function() {
    console.log('Server is running on http://localhost:' + PORT);
});