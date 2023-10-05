import { useState, useEffect } from "react";
import "../App.css";
import { Link } from 'react-router-dom'

function Homepage() {
    const [prompt, updatePrompt] = useState(undefined);
    const [loading, setLoading] = useState(false);
    const [answer, setAnswer] = useState(undefined);

    useEffect(() => {
        if (prompt != null && prompt.trim() === "") {
            setAnswer(undefined);
        }
    }, [prompt]);

    const sendPrompt = async (event) => {
        if (event.key !== "Enter") {
            return;
        }
        try {
            setLoading(true);
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ prompt }),
            };
            const res = await fetch("http://localhost:7000/api/ask", requestOptions);
            if (!res.ok) {
                throw new Error("Something went wrong");
            }
            console.log(res.body, 'request body')
            const { message } = await res.json();
            setAnswer(message);
            console.log(message)
        } catch (err) {
            console.error(err, "err");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Link to='/image'>
                <div className="">
                    <button className="bg-red-400 text-white font-bold py-3 px-10 rounded m-10 capitalize">
                        Imagepage
                    </button>
                </div>
            </Link>

            <div className="border-blue-100">
                <input
                    type="text"
                    className=" bg-gray-50 h-16 rounded shadow ml-52 w-80 text-center text-lg text-netural-300 "
                    placeholder="Ask me anything..."
                    disabled={loading}
                    style={{
                        //backgroundImage: loading ? `url(${loadingGif})` : `url(${lens})`,
                    }}
                    onChange={(e) => updatePrompt(e.target.value)}
                    onKeyDown={(e) => sendPrompt(e)}
                />
                {/* <button className="bg-red-400 text-white font-bold py-3 px-10 md:px-10 rounded m-10 capitalize" onClick={createText}>Submit</button> */}

            </div>
            <div className="w-auto text-center h-auto bg-white-300 mx-60 my-16 shadow-md ">{answer && <p>{answer}</p>}</div>

        </>

    );
}

export default Homepage;