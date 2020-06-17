var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ezazhossain615@gmail.com',
    pass: 'Hossain80039'
  }
});

var mailOptions = {
  from: 'ezazhossain615@gmail.com',
  to: 'hossainezaz786@gmail.com',
  subject: 'First Node Application',
  text: `Hi, I am Ezaz. I just send you a email.`,
  attachments: [
        { filename: 'Certificate.pdf', path: './Certificate.pdf' } // TODO: replace it with your own image
    ]
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});