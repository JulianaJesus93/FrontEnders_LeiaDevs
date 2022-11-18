import express from 'express';
import nodemailer from 'nodemailer'

const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello_Word!'));
app.listen(port, () => console.log(`Running on port ${port}`))

app.get('/send', (req,res) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "add181ae58cca7",
      pass: "ab7be26bb98a25"
    }
  })

  transporter.sendMail({
    from: 'add181ae58cca7',
    to: 'maxwencroft@gmail.com',
  })
})