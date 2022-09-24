import React, {useState} from 'react'
import './App.css'

function App(){
    const [date, setDate] = useState(new Date())
    
    return(
        <div className="App">
            <h1>Realtime Clock</h1>

        </div>
    )
}

export default App