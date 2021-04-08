require("dotenv").config()

const express = require("express")
const sendMail = require("./src/email")
const path = require("path")

const app = express()
const router = express.Router()
const PORT = 8080

// app.use("/public", express.static(path.join(__dirname, "public")))

app.use(
  express.urlencoded({
    extend: false,
  })
)

app.use(express.json())

app.get("/", (req, res) => {
  res.render("contact")
})

app.post("/email", (req, res) => {
  sendMail({ ...req.body })

  // res.sendFile(path.join(__dirname + "/public/index.html"))

  res.redirect("https://teinnt.com#contact")
  // next()
})

app.listen(PORT, () => console.log("Server is starting on PORT,", 8080))
