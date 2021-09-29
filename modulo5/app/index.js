const express = require("express");
const { hostname } = require("os");

const app = express();

const port = process.env.PORT;

app.get("/", (req, resp) => {
	resp.send(`<h1>hostname> ${hostname}</h1>`);
});

app.listen(port, () => {
	console.log(`http://localhost:${port}`);
});
