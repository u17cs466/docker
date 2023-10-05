const url = "https://api.openai.com/v1/chat/completions"
const RestApi = async (prompt, url) => {
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json", "Authorization": Bearer`${OPENAI_API_KEY}`
        },
        body: JSON.stringify({
            "model": "gpt-3.5-turbo",
            "messages": [
                {
                    "role": "system",
                    "content": "You are a helpful assistant."
                },
                {
                    "role": "user",
                    "content": { prompt }
                }
            ]
        }),
    };

    const res = await axios.post({ url }, requestOptions);
    return res;
}
export default RestApi;