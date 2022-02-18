import express from 'express';

const app = express();

app.get("/", (request, response) => {
  return response.send("olá NLW")
})

app.post("/send", (request, response) => {
  return response.send('enviado')
})
app.listen(3000, () => {
  console.log("Server iniciado na porta: 3000")
})