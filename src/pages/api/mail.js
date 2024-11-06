const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
    if (req.method === "POST") {
        try {
            const { message, subject } = req.body;

            await mail.send({
                to: ['paul.lees@bespinlabs.com', 'b@weareenigma.com', 'sales@bespinlabs.com'],
                // to: 'hitesh@weareenigma.com',
                from: {
                    name: 'Patronum Webforms',
                    email: 'webforms@patronum.io'
                 },
                subject: subject || "Form Response",
                html: message,
              });

              res.status(200).json({ message: "Email sent successfully" });
              
        } catch (error) {
            res.status(500).json({ error: "Email could not be sent" });
        }
    } else {
      res.status(405).json({ error: "Method not allowed" });
    }
};