const express = require("express");
const app = express();
const port = 3000; // You can choose any available port

app.get("/", (req, res) => {
	res.send("Hello, World!");
});

app.get("/api/v1/visit-ruboni", (req, res) => {
	res.send("Visit Ruboni Endpoint");
});

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
