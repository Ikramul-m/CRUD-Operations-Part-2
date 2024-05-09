const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

const PORT = 8000;
const hostName = "localhost";

app.listen(PORT, () => {
  console.log(`Server is running at http://${hostName}:${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Welcome to my Home!!!");
});

app.get('/api/MyFamily', async (req,res) => {
    try
    {
        const member = await member.find({})
        res.status(200).json(member)
    }
    catch(error) 
    {
        res.status(404).json({message: error.message})
    }
})




app.post("/api/MyFamily", async (req, res) => {
  try {
    const member = await member.create(req.body);
    res.status(200).json(member);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


mongoose.connect("mongodb://127.0.0.1:27017/MyFamily").then(() => {
    console.log('Connected to database.')
}).catch(() => {
    console.log('COnnection failed.')
})