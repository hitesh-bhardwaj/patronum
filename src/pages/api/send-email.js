import nodemailer from "nodemailer";

const emailform = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: emailform,
    pass,
  },
});

export default async (req, res) => {
  if (req.method === "POST") {
    try {

    const message = req.body.message;

      // Define email data
      const mailOptions = {
        from: emailform,
        to: emailform,
        subject: "PopUp Form Response",
        text: message, // You can customize the email message here
      };

      // Send the email
      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent: " + info.response);

      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Email could not be sent" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
};
