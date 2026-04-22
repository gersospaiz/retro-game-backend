const express = require("express");
const app = express();

app.use(express.json());

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("Servidor funcionando 🚀");
});

// Ruta para guardar score
app.post("/score", (req, res) => {
  const { username, score } = req.body;

  console.log("Usuario:", username);
  console.log("Score:", score);

  res.json({ message: "Score recibido correctamente" });
});

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});