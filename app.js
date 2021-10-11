const express = require("express")
const app = express()

const path = require("path")
app.use(express.static("public"))
const puerto = process.env.PORT


app.listen(puerto || 3000, function() {
    console.log("Servidor corriendo en el puerto 3000");
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'))
});