// Define app configuration in a single location, but pull in values from
// system environment variables (so we don't check them in to source control!)
module.exports = {
    //flag to get Twilio Account Setting from this file or from environment
    // If set to 'Y' , the values are read from config.js and not from environment
    getTwiliAccountSettingsfromFile: 'Y',


    // Your primary Twilio Account SID
    accountSid: 'ACe76e85e20246ff7545a1f7ed004acf25',

    // API Key/Secret Pair - generate a pair in the console
    apiKey: 'SK60b2b911097feec189f405e00b2c1ea4',
    apiSecret: 'j4B8hwzw37GCGl0FYUVl9QWjlsZl1UAz',

    // Your Chat service instance SID
    serviceSid: 'IS2ffa91b133ab43579e5da0b70f21a7a9',

    // Defines whether or not this application is deployed in a production
    // environment
    nodeEnv: process.env.NODE_ENV || 'development',

    // In production, this is the base host name for web app on the public
    // internet, like "jimmysbbq.herokuapp.com".  This should be the same host
    // you use in your Twilio Number config for voice or messaging URLs
    host: process.env.HOST || 'localhost',

    // The port your web application will run on
    port: process.env.PORT || 3000

};