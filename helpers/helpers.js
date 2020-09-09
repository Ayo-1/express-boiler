
exports.sendmail = (email, subject, page) => {
const transporter = nodemailer.createTransport({sendmail: true}, {
  from: "ecounsel@ecounsel.com.ng",
  to: email,
  subject: subject,
});
var contact
transporter.sendMail({html: page}, (error, info) => {
     if (error) {
	console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
})
}