const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/v1", require("./routes/mediaRoute"));

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
