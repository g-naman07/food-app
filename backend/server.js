const app = require('./src/app')
const connectdb = require('./src/db/db')
require('dotenv').config()
connectdb().then(() => {
    app.listen(3000, () => {
        console.log('server at 3000')
    })
}).catch(err => {
    console.error('Failed to connect to DB', err);
    process.exit(1);
});