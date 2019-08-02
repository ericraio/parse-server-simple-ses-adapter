# parse-server-simple-ses-adapter
Used to send Parse Server password reset and email verification emails though Amazon SES

# Parse Server Simple SES Email Adapter

With this adapter you can send email for reset password and email verification in parse with AWS SES access.


### Use

In the configuration of your parse server you must pass `parse-server-simple-ses-adapter` as an email adapter.

This is an example parse server config:

```js

// Parse Server Config
var api = new ParseServer({
    appName: 'My SES App',                                  // Required for email
    databaseURI:  DATABASE_URI,
    cloud: CLOUD_CODE_MAIN,
    appId: APP_ID,
    masterKey: MASTER_KEY,
    fileKey: FILE_KEY,
    serverURL: SERVER_URL,
    publicServerURL: SERVER_URL,                            // Required for email
    allowClientClassCreation: false,
    verbose: false,
    emailAdapter: {
        module: 'parse-server-simple-ses-adapter',
        options: {
            fromAddress: 'no-reply@aVerifiedDomain.com',
            apiKey: SES_ACCESS_KEY,                         // SES API Key
            apiSecret: SES_SECRET_KEY,                      // SES API Secret
            domain: 'aVerifiedDomain.com',                  // A verified domain in SES
            amazon: 'https://email.us-east-1.amazonaws.com',// OPTIONAL: Defaults to us-east-1
            format: 'html'                                  // OPTIONAL: 'html' (default) or 'text'
        }
    }
});

...
```

### Contributing
This module is pull request friendly in the develop branch feel free of send new features or bug fixes.

If you find a bug please open an issue.
