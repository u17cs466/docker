const RestApi=async(prompt,url)=>{
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
    };

    const res = await fetch({url}, requestOptions);
    return res;
}
export default RestApi;