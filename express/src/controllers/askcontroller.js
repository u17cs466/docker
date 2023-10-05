require("dotenv").config();
const { OpenAIApi } = require("openai");
const configuration = require("../configaration/config")

const openai = new OpenAIApi(configuration);

const askData = async (req, res) => {
    const prompt = req.body;
    try {
        if (prompt == null) {
            throw new Error("Uh oh, no prompt was provided bro");
        }
        const response = await openai.createCompletion({
            model: "gpt-3.5-turbo",
            prompt,
        });
        const completion = response.data.choices[0].text;
        return res.status(200).json({
            success: true,
            data: completion,
        });
    } catch (error) {
        console.log(error.message, "error message");
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