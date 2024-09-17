import { useState } from "react"


function App() {
  const [color, setColor] = useState("#93c5fd")

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}
      >
         {/* Create bottom bar */}
       <div className=" flex flex-wrap justify-center bottom-12 insert-x-0 px-2">
        
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-xl">
          
          {/* Buttons creted inside the bar */}
          <button 
          onClick={() => setColor("#C5B4E3")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"#C5B4E3"}}> Lavender Haze  </button>

          <button onClick={() => setColor("#B8E8D2")}
           className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor:"#B8E8D2"}}> Mint Whisper </button>

          <button onClick={() => setColor("olive")}
           className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"olive"}}> Olive </button>

          <button onClick={() => setColor("#F7F2E0")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor:"##F7F2E0"}}> Coconut Cream </button>

          <button onClick={() => setColor("orange")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor:"orange"}}> Orange </button>

          <button onClick={() => setColor("#F4C2C2")}
           className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor:"#F4C2C2"}}> Blush Pink </button>
           
           <button onClick={() => setColor("#FFD700")}
           className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor:"#FFD700"}}> Lemon Zest </button> 

          <button onClick={() => setColor("#FF6F61")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"#FF6F61"}}> Sunset Coral </button>

          <button onClick={() => setColor("lavender")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor:"lavender"}}> Lavender </button>

          <button onClick={() => setColor("#7EC8E3")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"#7EC8E3"}}> Ocean Breeze  </button>

          <button onClick={() => setColor("black")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"black"}}> Black </button>

          <button onClick={() => setColor("#D4AF37")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"#D4AF37"}}> Golden Sands </button>




         
          </div> 
       </div>

      </div>
    </>
  )
}

export default App
