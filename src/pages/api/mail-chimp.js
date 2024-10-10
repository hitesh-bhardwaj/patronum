import fetch from 'isomorphic-unfetch';

export default async (req, res) => {
  const { email, name, company, countryName, pageURL, tag } = req.body; 

  if (!email || !name || !company || !countryName || !pageURL || !tag) { 
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const DATACENTER = process.env.MAILCHIMP_API_SERVER;
    
    // Split full name into first name and last name
    const fullName = name.trim(); // Trim to remove leading/trailing spaces
    const spaceIndex = fullName.indexOf(' ');
    const firstName = spaceIndex !== -1 ? fullName.substring(0, spaceIndex) : fullName;
    const lastName = spaceIndex !== -1 ? fullName.substring(spaceIndex + 1) : '';

    const data = {
      email_address: email,
      status: 'subscribed',
      tags: [`${tag}`],
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName,
        COUNTRY:  countryName,
        COMPANY: company,
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
