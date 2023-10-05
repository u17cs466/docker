require("dotenv").config();
const { OpenAIApi } = require("openai");
const configuration = require("../configaration/config")

const openai = new OpenAIApi(configuration);

const askData = async (req, res) => {
    const prompt = req.body.prompt;
    console.log(prompt)
    try {
        if (prompt == null) {
            throw new Error("Uh oh, no prompt was provided bro");
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
}
const ImageCreate = async (req, res) => {
    const prompt = req.body;
    try {
        const response = await openai.createImage({
            prompt,
            n: 1,
            size: "512x512",
        });
        const completion = response.data.data[0].url;
        return res.status(200).json({
            success: true,
            data: completion,
        });
    }
    catch (error) {
        console.log(error.message, "error message");
    }
};

module.exports = { askData, ImageCreate };