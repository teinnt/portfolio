const http = require("http")

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello, world!")
    res.end()
  }
})

server.listen(80, "127.0.0.1")

// var nodemailer = require("nodemailer")

// var transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "youremail@gmail.com",

//     pass: "yourpassword",
//   },
// })

// var mailOptions = {
//   from: "youremail@gmail.com",

//   to: "myfriend@yahoo.com",
//   subject: "Sending Email using Node.js",
//   text: "That was easy!",
// }

// transporter.sendMail(mailOptions, function (error, info) {
//   if (error) {
//     console.log(error)
//   } else {
//     console.log("Email sent: " + info.response)
//   }
// })
