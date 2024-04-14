import { useState } from "react";

function App() {
  let initialColor = 'black'
  let [color, setColor] = useState(initialColor)

  return (
    <>
      <div className="w-screen h-screen duration-300"style={{ backgroundColor: color, color: "white" }}>
        <div className="flex justify-center align-middle fixed bottom-8 left-0 w-full">
          <div className="flex justify-center align-middle flex-wrap gap-6 px-4 py-2 rounded-full" style={{background: 'white'}}>
            <button className="px-5 py-1 rounded-full" style={{background: 'red'}} onClick={() => setColor('red')}>Red</button>
            <button className="px-5 py-1 rounded-full" style={{background: 'green'}} onClick={()=> setColor('green')}>Green</button>
            <button className="px-5 py-1 rounded-full" style={{background: 'blue'}} onClick={()=> setColor('blue')}>Blue</button>
            <button className="px-5 py-1 rounded-full" style={{background: 'olive'}} onClick={()=> setColor('olive')}>Olive</button>
            <button className="px-5 py-1 rounded-full" style={{background: 'gray'}} onClick={()=> setColor('gray')}>Gray</button>
            <button className="px-5 py-1 rounded-full" style={{background: 'yellow', color: 'black'}} onClick={()=> setColor('yellow')}>Yellow</button>
            <button className="px-5 py-1 rounded-full" style={{background: 'pink', color: 'black'}} onClick={()=> setColor('pink')}>Pink</button>
            <button className="px-5 py-1 rounded-full" style={{background: 'purple'}} onClick={()=> setColor('purple')}>Purple</button>
            <button className="px-5 py-1 rounded-full" style={{background: 'lavender', color: 'black'}} onClick={()=> setColor('lavender')}>Lavender</button>
            <button className="px-5 py-1 rounded-full drop-shadow-lg" style={{background: 'white', color: 'black'}} onClick={()=> setColor('white')}>White</button>
            <button className="px-5 py-1 rounded-full" style={{background: 'black'}} onClick={()=> setColor('black')}>Black</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
