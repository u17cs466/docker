require("dotenv").config();
const express = require("express");
const cors = require('cors')
const { Configuration, OpenAIApi } = require("openai");

const app = express();
app.use(cors())
app.use(express.json());

const port = process.env.PORT || 6000;

app.post("/ask", async (req, res) => {
    const prompt = req.body.prompt;

    try {
        if (prompt == null) {
            throw new Error("Uh oh, no prompt was provided");
        }

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

app.listen(port, () => console.log('server is running on ', 'http://localhost:' + port));