const host = '0.0.0.0';
const port = process.env.PORT || 3000;

app.listen(port, host, function () {
   console.log("Server started...");
});