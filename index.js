const express = require("express");
const app = express();

app.use(express.json());

const PORT = 3000;
const hostName = "localhost";

app.listen(PORT, () => {
  console.log(`Server is running on http://${hostName}:${PORT}`);
});

app.get('/', (req,res) => {
    res.send('Welcome')
})

