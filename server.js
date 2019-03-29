const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets if in production
if (process.env.NODE_ENV === "production") {
  //  set static folder
  app.use(express.static("client/build"));

  app.get('*',(req,res) => {
      res.sendFile(path.resolve(__dirname,'client','build','index.html'))
  })

}

// server listening to port
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
