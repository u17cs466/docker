const express = require("express");
require('dotenv').config()
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const askData = async (req, res) => {
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
};
const ImagetUrl = async (req, res) => {
    const prompt = req.body.prompt;

    try {
        if (prompt == null) {
            throw new Error("Uh oh, no prompt was provided");
        }
        console.log(openai, "demo")
        const response = await openai.createImage({
            prompt,
            n: 1,
            size: "512x512"
        });

        const completion = response.data.data[0].url;

        return res.status(200).json({
            success: true,
            message: completion,
        });
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = { askData, ImagetUrl }