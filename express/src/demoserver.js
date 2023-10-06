const express = require("express");
const cors = require('cors')
require('dotenv').config()
// const dotenv = require('dotenv');
// dotenv.config({ path: `${__dirname}/.env` });
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const app = express();
app.use(cors())
app.use(express.json());

const PORT = 5000 || 6000;

app.post("/ask", async (req, res) => {
    const prompt = req.body.prompt;

    try {
        if (prompt == null) {
            throw new Error("Uh oh, no prompt was provided");
        }
        console.log(openai, "demo")
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt,
            max_tokens: 64,
        });

        const completion = response.data.choices[0].text;

        return res.status(200).json({
            success: true,
            message: completion,
        });
    } catch (error) {
        console.log(error.message);
    }
});

app.listen(PORT, () => console.log('server is running on ', 'http://localhost:' + PORT));