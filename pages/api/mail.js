const sgMail = require('@sendgrid/mail');


export default (req, res) => {
    if (req.method === 'POST') {
        const { name, email, company, phone, message } = req.body.values
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        const msg = {
            to: 'support@quantum.gg',
            from: 'support@quantum.gg',
            subject: 'Contact Request - Quantum Website',
            html: `<p>Name: ${name}</p> <p>Email: ${email}</p> <p>Company: ${company}</p> <p>Phone: ${phone}</p> <p>Message: ${message}</p>`,
        };
        sgMail.send(msg)
        .then(response => res.status(200).json({ success: true, msg:'Message Sent! We will get back in touch asap!', response }))
        .catch(err => {
            console.log(err)
            res.status(500).json({ success: false, msg: 'Oops! Something went wrong', err })
        })
      }
  }
  