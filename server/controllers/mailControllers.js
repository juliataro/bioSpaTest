require("dotenv").config();

const nodemailer = require("nodemailer");

exports.sendMail = (req, res, next) => {
  try {
    console.log("req body", req.query);
    let userName = req.query.name; // name is useState of name form frontend
    let userEmail = req.query.email;
    let userSubject = req.query.subject;
    let userMessage = req.query.message;

    // Reusable transport method that opens pool of SMTP connections
    let smtpTransport = nodemailer.createTransport({
      // pool: true, // use pooled connections instead of creating a new connection for every email
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      logger: true, // logs to console
      debug: true, // logs SMTP traffic
      transactionLog: true, // include SMTP traffic in the logs
      auth: {
        user: process.env.SMTP_TO_EMAIL,
        pass: process.env.SMTP_TO_PASSWORD,
      },
    });

    smtpTransport.close(); // Closess the connection if there is no need for long

    // Setup email data with unicode symbols
    var mailOptions = {
      from: process.env.SMTP_TO_EMAIL,
      to: userEmail,
      subject: userSubject,
      text: userMessage,
    };

    // Send email with defined transport object
    smtpTransport.sendMail(mailOptions, (err, response) => {
      setLoading(false);
      console.log(mailOptions);
      // return res
      //   .status(200)
      //   .json({ status: true, respLetter: "Teie Kiri Saadetud Edukalt!" });
    });
  } catch (error) {
    if (error) {
      console.log("Error In Sending Mail", error);
      return res.status(400).json({
        status: false,
        respLetter: `Juhtus Viga Kiri Saatmisel ${err}`,
      });
    }

    next(error);
  }
};
