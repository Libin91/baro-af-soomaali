const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require ('cors');
// IMPORT YOUR MODELS
require('./models/signUpSchema');

const app = express();
app.use(cors());
mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGODB_URI ||
    `mongodb+srv://Libin:tomodachi@cluster0.yyf2c.mongodb.net/Black-Codher?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }, () => console.log('Database connected')
);

app.use(bodyParser.json());

// IMPORT YOUR ROUTES
require('./routes/usersRoutes')(app);

// Accessing the path module
const path = require("path");

// Step 1:
app.use(express.static(path.resolve(__dirname, "./client/build")));
// Step 2:
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
