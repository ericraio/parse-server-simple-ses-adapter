var ses = require('node-ses');

var SimpleSESAdapter = sesOptions => {

  if (!sesOptions || !sesOptions.apiKey || !sesOptions.apiSecret || !sesOptions.domain || !sesOptions.fromAddress) {
    throw 'SimpleSESAdapter requires an API Key, domain, and fromAddress.';
  }

  var client = ses.createClient({ key: sesOptions.apiKey, secret: sesOptions.apiSecret });

  var sendMail = mail => {
    var data = {
      to: mail.to,
      from: sesOptions.fromAddress,
      subject: mail.subject,
      message: mail.text,
    };

    return new Promise((resolve, reject) => {
      client.sendEmail(data, function(err, body, res) {
        if (typeof err !== 'undefined') {
          reject(err);
        }
        resolve(body);
      });
    });
  };

  return Object.freeze({
    sendMail: sendMail
  });
};

module.exports = SimpleSESAdapter;
