const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: 'test@example.com',
  from: 'test@example.com',
  subject: 'Sending with Twilio SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
sgMail.send(msg);

const sendMail = ({to,content,subject}) => {
  let msg = {
    to,
    from: 'Spencer at Makler',
    subject,
    html: content
  };
  sgMail.send(msg)
}

export const sendPasswordResetToken = async ({ email, token }) => {
  try{
    let content = `<div> Your password Reset Token is <b>${token}</b> <div>`,
      subject = 'Password Reset Token'
    await sendMail({ to: email, content, subject })
    return true
  } catch (e) {
    return false
  }
  
}