var userEmail = require("../models/userInfo")


const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');


function grabEmail(userEmail){

    const msg = {
        to: userEmail,
        from: 'yourfkntodolist@gmail.com',
        subject: "I'm a failure",
        text: 'this is my test email',
        html: '<strong>I failed to accomplish my tasks today - what a loser! </strong>',
      };
      sgMail.send(msg);
      
}
module.exports = grabEmail();

