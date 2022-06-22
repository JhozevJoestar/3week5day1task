const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(require("./routes/comments.route.js"));
app.use(require("./routes/likes.route.js"));
app.use(require("./routes/saves.route.js"));
app.use(require("./routes/twits.route.js"));
app.use(require("./routes/users.route.js"));




mongoose.connect("mongodb+srv://GigaChad:Jason952@cluster0.ygimb.mongodb.net/baskes?retryWrites=true&w=majority", () => {
    app.listen(3000, () => {
        console.log('Сервер запущен успешно')
      })
    
    })
