require("express-async-errors");
const app = require("express")();
const mongoose = require("mongoose");
const { Test } = require("./models/user");
const PORT = process.env.PORT || 5000;
require("./start/middleware")(app);

const mongoURL =
  "mongodb+srv://vercel-admin-user:nw6x60RgXCAjb3Q1@cluster0.6kysb.mongodb.net/codingspace";

mongoose.connect(mongoURL, { useUnifiedTopology: true }).then(() => {
  console.log("success mongodb connect");
});

app.get("/add", async (req, res) => {
  await addOneUser();
  const users = await Test.find();
  res.send(users || "no users");
});

const addOneUser = async () => {
  const user = new Test({
    name: "John",
  });
  const result = await user.save();
};

app.listen(PORT, () => {
  console.log(PORT + " port connected successfuly...");
});
