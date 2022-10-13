const express = require("express");
const { contentSecurityPolicy } = require("helmet");
const app = express();

app.listen(8080, () => {
    console.log("Backend server is running!")
})