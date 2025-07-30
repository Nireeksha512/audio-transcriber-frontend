import TranscriptionList from "../components/transcriptionList";

function Transcriptions()
{
    return(
        <div>
            <h2 className="text-2xl font-bold mb-4 text-blue-700">Saved Transcriptions</h2>
            <TranscriptionList/>
        </div>
    );
}
export default Transcriptions;