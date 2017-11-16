const twilio = require('twilio');

const accountSid = 'AC2d41013b2cd2cf3f82b80b56d4d95741';
const authToken = '61a78c6dbfd236e3a5c76136e599d47a';

module.exports = new twilio.Twilio(accountSid, authToken);