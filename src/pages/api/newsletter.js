import crypto from 'crypto';
import fetch from 'isomorphic-unfetch';

export default async (req, res) => {
  const { email, pageURL } = req.body;

  if (!email || !pageURL) {
    return res.status(400).json({ error: 'Email and pageURL are required.' });
  }

  try {
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const DATACENTER = process.env.MAILCHIMP_API_SERVER;

    const data = {
      email_address: email,
      status: 'subscribed', // for the initial POST
      tags: ['Patronum Newsletter'],
      merge_fields: {
        POPUPREQ: pageURL,
      },
    };

    // Try a POST first
    const response = await fetch(
      `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,
      {
        method: 'POST',
        headers: {
          Authorization: `apikey ${API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );

    // If Mailchimp's response is not OK...
    if (!response.ok) {
      const errorResponse = await response.json();

      // Check if it's the "already a list member" case:
      if (
        errorResponse.title === 'Member Exists' ||
        errorResponse.detail?.includes('is already a list member')
      ) {
        // Generate the MD5 subscriber hash
        const subscriberHash = crypto
          .createHash('md5')
          .update(email.toLowerCase())
          .digest('hex');

        // Use PUT to upsert the contact and add the tag
        const putResponse = await fetch(
          `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members/${subscriberHash}`,
          {
            method: 'PUT',
            headers: {
              Authorization: `apikey ${API_KEY}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email_address: email,
              status_if_new: 'subscribed',
              merge_fields: {
                POPUPREQ: pageURL,
              },
              tags: ['Patronum Newsletter'],
            }),
          }
        );

        if (!putResponse.ok) {
          const putError = await putResponse.json();
          return res.status(putResponse.status).json({
            error:
              putError.detail ||
              putError.title ||
              'Error adding/updating existing member.',
          });
        }
        return res.status(201).json({ error: '' });
      }

      return res.status(response.status).json({
        error:
          errorResponse.detail ||
          errorResponse.title ||
          'Something went wrong.',
      });
    }

    // If POST was successful, all good
    return res.status(201).json({ error: '' });
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.message || error.toString() });
  }
};
