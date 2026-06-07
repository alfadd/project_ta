import { useState } from "react"

export default function Coba() {
    const [key, setKey] = useState("1");

    return (
        <div>
        <button onClick={() => setKey(1)}>1</button>
        <button onClick={() => setKey(2)}>2</button>
        <button onClick={() => setKey(3)}>3</button>

        <div>
            
        { key ===1 ? <h1>first</h1> : key === 2 ? <h1>second</h1> : <h1>third</h1> }
            
            
        </div>
        </div>
        
    )
}