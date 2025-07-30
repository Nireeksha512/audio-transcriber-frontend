import  { useState} from 'react';
import axios from "axios";
export default function AudioUpload()
{
    const [selectedFile,setSelectedFile]=useState(null);
    const [transcription,setTranscription]=useState("");
    const [error,setError]=useState("");
    const [loading,setLoading]=useState(false);
    
    const handleFileChange =(e) => {
        setSelectedFile(e.target.files[0]);
        setTranscription("");
        setError("");
    };

    const handleUpload = async() => {
        if(!selectedFile)
        {
            alert("Please select a file first.");
            return;
        }

        const formData = new FormData();
        formData.append('audio',selectedFile);

        try{
            setLoading(true);
            const response=await axios.post("http://localhost:5000/api/transcribe"
                ,formData,{
                    headers:{
                        "Content-Type":"multipart/form-data",
                    },
                    
                }

            );
            
            console.log("Backend response:",response.data);
            setTranscription(response.data.transcription);
        }

        catch(err)
        {
            console.error("Upload failed!",err);
            setError("Something went wrong.Try Again.");
        }
        finally{
            setLoading(false);

        }
    };

    return(
        <div className="flex flex-col items-center gap-4 p-6 bg-white
        shadow-md rounded-x1 max-w-md mx-auto mt-10 ">
            <h1 className="text-xl font-bold mb-6">Audio Upload</h1>
            <input type="file"
                    accept="audio/*"
                    onChange={handleFileChange}
                    className="block w-full text-sm text-gray-500 file:mr-4
                    file:py-2 file:px-4 file:rounded-full file:border-0
                    file:text-sm file:font-semibold file:bg-blue-50
                    file:text-blue-700
                    hover:file:bg-blue-100"/>

        <button
            onClick={handleUpload}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 ">Upload & Transcribe</button>

            {loading && <p className="text-yellow-500">Transcribing.....</p>}
            {error && <p className="text-red-500">{error}</p>}

            {transcription && (<div className="mt-4 text-center">
                <h2 className="font-semibold">Transcription:</h2>
                <p className="bg-gray-100 p-3 rounded">{transcription}</p></div>)}
                

            

            
        </div>
    );
}

