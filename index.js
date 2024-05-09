const express = require("express");
const app = express();

app.use(express.json());

const PORT = 3000;
const hostName = "localhost";

app.listen(PORT, () => {
  console.log(`Server is running at http://${hostName}:${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Welcome to my Home!!!");
});

app.post("/api/MyFamily", async (req, res) => {
  try {
    const member = await member.create(req.body);
    res.status(200).json(member);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
