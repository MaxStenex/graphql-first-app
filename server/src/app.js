require("dotenv").config();
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 4000;

mongoose.connect(
  `mongodb+srv://test-user:${process.env.DB_PASSWORD}@testing.c2tcy.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
  { useUnifiedTopology: true, useNewUrlParser: true }
);

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`Server started on port:${PORT}`);
});
