const express = require("express");


const app = express();

app.use(express.json());
app.use(express.static("public"));

const port=process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server started at ${port}`);
})
