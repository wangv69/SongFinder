import {useState} from 'react'

function App(){
  const [songName, setSongName] = useState("");

  return(
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-black mb-8">
        Song Finder
      </h1>

      <input 
        type="text"
        value={songName}
        className="border border-gray-300 rounded-lg p-5 text-3xl w-full max-w-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
        placeholder="What is the name of your song?"
        onChange={(e) => setSongName(e.target.value)}
      />

      <button
        onClick={() => console.log(songName)}
        className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-lg text-2xl transition-colors shadow-sm"
        >
        Search
      </button>
    </div>
  )
}

export default App