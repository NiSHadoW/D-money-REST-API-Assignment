require('dotenv').config();
const newman = require('newman');

newman.run(
    {
        collection: `${process.env.POSTMAN_COLLECTION}?access_key=${process.env.POSTMAN_KEY}`,
        // environment: require('./env.json'), // uncomment if you want to use env.json
        iterationCount: 1,
        reporters: 'htmlextra',
        reporter: {
            htmlextra: {
                export: './Reports/report.html',
            }
        },
        insecure: true // helps bypass SSL errors if certs are expired
    },
    (err) => {
        if (err) throw err;
        console.log('✅ Collection run complete!');
    }
);
