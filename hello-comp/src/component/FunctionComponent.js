import React, {useState} from 'react'
import './App.css'

function App(){
    const [date, setDate] = useState(new Date())
    
    return(
        <div className="App">
            <h1>Realtime Clock</h1>
            <hr />
            <h1>{date.toLocaleDateString()}</h1>

        </div>
    )
}

export default App

function tick(){
    setDate(new Date())
    setInterval(() => tick(),1000)
}