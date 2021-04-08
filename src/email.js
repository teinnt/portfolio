var nodemailer = require("nodemailer")
var transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: process.env.HOST,
    pass: process.env.APP_PASSWORD,
  },
})

function sendEmail(data) {
  const mailOptions = {
    from: process.env.HOST,
    to: "taylortran.it@gmail.com",
    subject: "Email From Recruiter",
    html: `<p>${data.name}</p><p>${data.emailFrom}</p><p>${data.message}</p>`,
  }

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) console.log(err)
    else console.log(info)
  })
}

module.exports = sendEmail
