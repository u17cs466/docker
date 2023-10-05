const app = require('./app');
const dotenv = require('dotenv');
dotenv.config({ path: `${__dirname}/.env` });
const { Configuration, OpenAIApi } = require("openai");
try {

    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });

    const openai = new OpenAIApi(configuration);
    console.log("connect sucessfully")
}
catch (err) {
    res.status(500).json({
        status: 'fail',
        data: err.message,
    });
}
const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
    console.log('server is running on ', 'http://localhost:' + PORT);
});
