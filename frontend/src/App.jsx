import {useState} from 'react'

function App(){
  const [lyrics, setLyrics] = useState("");
  const [backendMessage, setBackendMessage] = useState("");

  async function handleSearch(){
    console.log("Searching for", lyrics)

    try{
      const response = await fetch(`http://127.0.0.1:5001/?query=${encodeURIComponent(lyrics)}`);
      const data = await response.json();
      setBackendMessage(data.message);
    }catch(error) {
      console.error("Error connecting to Flask:", error);
      setBackendMessage("Failed to connect to backend.");
    }
  }

  return(
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-black mb-8">
        Song Finder
      </h1>

      <input 
        type="text"
        value={lyrics}
        className="border border-gray-300 rounded-lg p-5 text-3xl w-full max-w-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
        placeholder="Enter the lyrics of the song you are looking for!"
        onChange={(e) => setLyrics(e.target.value)}
      />

      <button
        onClick={handleSearch}
        className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-lg text-2xl transition-colors shadow-sm"
        >
        Search
      </button>

      {backendMessage && (
        <p className="mt-8 text-2xl text-green-600 font-medium">
          Backend says: {backendMessage}
        </p>
      )}
    </div>
  )
}

export default App