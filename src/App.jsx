import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Transcriptions from './pages/Transcriptions';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white text-gray-800">
      
      <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-700">🎙️ Audio Transcriber</h1>
        <div className="space-x-4">
          <Link to="/" className="text-blue-600 hover:text-blue-800 font-medium">Home</Link>
          <Link to="/transcriptions" className="text-blue-600 hover:text-blue-800 font-medium">Transcriptions</Link>
        </div>
      </nav>

      
      <div className="p-6 max-w-3xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transcriptions" element={<Transcriptions />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;