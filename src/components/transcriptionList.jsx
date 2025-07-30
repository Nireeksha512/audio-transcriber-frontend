// src/components/TranscriptionList.jsx

// transcriptionList.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function TranscriptionList() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/fetch')
      .then(res => setRecords(res.data))
      .catch(err => console.error("Error fetching transcriptions:", err));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Saved Transcriptions</h2>

      {records.length === 0 ? (
        <p className="text-gray-500">No transcriptions found.</p>
      ) : (
        <ul className="space-y-2">
          {records.map(record => (
            <li key={record.id} className="border rounded p-2 shadow-sm">
              <p><strong>Filename:</strong> {record.filename}</p>
              <p><strong>Text:</strong> {record.transcription}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}