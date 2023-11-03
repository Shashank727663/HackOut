const express = require("express");
const app = express();
const cors = require("cors");

const connectdb = require("./db");
const JournalRouter = require("./routes/JournalRouter");
const UserRouter = require("./routes/UserRouter");
const Protect = require("./middlewares/AuthMiddleware");
app.use(cors());
const port = 5000;
app.use(express.json());

connectdb();

app.use("/user" , UserRouter)
app.use("/journal" ,Protect, JournalRouter)

app.use("/", (req , res) => {
    res.send("the server is up and running..")
})
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
