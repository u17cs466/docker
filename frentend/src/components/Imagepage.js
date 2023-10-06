import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from "axios";

function Imagepage() {
    const [imageURL, setImageURL] = useState("")
    const [prompt, updatePrompt] = useState(undefined);

    useEffect(() => {
        if (prompt != null && prompt.trim() === "") {
            setImageURL(undefined)
        }
    }, [prompt]);
    const createImg = async () => {
        console.log(prompt)
        const response = await axios.post("http://localhost:4000/api/ask/image", {
            prompt,
        });
        setImageURL(response.data.message);
        //console.log(response.data)
    };

    return (
        <>
            <Link to='/'>
                <div className="">
                    <button className="bg-red-400 text-white font-bold py-3 px-10 rounded m-10 capitalize">
                        Homepage
                    </button>
                </div>
            </Link>

            <div className="border-blue-100">
                <input
                    type="text"
                    className=" bg-gray-50 h-16 rounded shadow ml-10 md:ml-52 w-80 text-center text-lg text-netural-300 "
                    placeholder="Ask me anything..."
                    style={{
                        //backgroundImage: loading ? `url(${loadingGif})` : `url(${lens})`,
                    }}
                    onChange={(e) => updatePrompt(e.target.value)}
                // onKeyDown={(e) => createImg(e)}
                />
                <button className="bg-red-400 text-white font-bold py-3 px-10 md:px-10 rounded m-10 capitalize" onClick={createImg}>Submit</button>
            </div>
            <div className="w-auto h-auto text-center bg-red-300 mx-5 sm:mx-40 my-16 shadow-md "> {imageURL && <img src={imageURL} alt="prompt" />}</div>


        </>
    )
}
export default Imagepage;