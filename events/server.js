const config = require("./../settings/config");


const express = require("express");
const app = express();
app.listen(() => console.log("Server started"));
app.use('/', (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body>
	 naon
</body>
</html>`)
});