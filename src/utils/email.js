import mailchimp from 'mailchimp-api-v3';
const mailchimpClient = new mailchimp(process.env.MAILCHIMP_API_KEY);

export async function sendEmail({ to, from, subject, message }) {
    const campaignOptions = {
      type: 'regular',
      recipients: { to_emails: [to] },
      settings: {
        subject_line: subject,
        reply_to: from,
        from_name: from,
      },
    };
  
    const campaignContent = {
      plain_text: message,
    };
  
    try {
      await mailchimpClient.request({
        method: 'POST',
        path: '/campaigns',
        body: {
          type: 'regular',
          recipients: { list_id: 'your_mailchimp_list_id' },
          settings: {
            subject_line: subject,
            reply_to: from,
            from_name: from,
          },
          content: {
            plain_text: message,
          },
        },
      });
      console.log('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:',
  
   error);
      throw error;
    }
  }