const express = require("express");
const app = express();
const PORT = 3001;

app.get("/", (req, res) => {
  res.send("📦 Response from Server 1");
  console.log('test');
  
});

app.listen(PORT, () => {
  console.log(`🚀 Server 1 running on http://localhost:${PORT}`);
});
