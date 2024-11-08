import fetch from 'isomorphic-unfetch';

export default async (req, res) => {
  const { email, pageURL } = req.body; 

  if (!email || !pageURL) { 
    return res.status(400).json({ error: 'Email is required.' });
  }

  try {
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const DATACENTER = process.env.MAILCHIMP_API_SERVER;

    const data = {
      email_address: email,
      status: 'subscribed',
      tags: [`Patronum Newsletter`],
      merge_fields: {
        POPUPREQ: pageURL,
      },
    };

    const response = await fetch(
      `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,
      {
        body: JSON.stringify(data),
        headers: {
          Authorization: `apikey ${API_KEY}`,
          'Content-Type': 'application/json',
        },
        method: 'POST',
      }
    );

    if (response.status >= 400) {
      return res.status(201).json({
        error: '',
      });
    }

    return res.status(201).json({ error: '' });
  } catch (error) {
    return res.status(201).json({ error: error.message || error.toString() });
  }
};
