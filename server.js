const path = require("path");
const express = require("express");
const app = express();
app.use(express.static("build"));

app.get("*", (req, res) => {
	res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

app.listen(process.env.PORT || 5000);
