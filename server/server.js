const host = '0.0.0.0';
const PORT = process.env.PORT || 5000;

app.listen(PORT, host, function () {
   console.log("Server started...");
});