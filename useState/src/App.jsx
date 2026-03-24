import React, { useState } from 'react'

function App() {
  const[state , setState] = useState({count:0, clickes:0})
  return (
    <div className='App'>
        <div>Button Clicked - {state.count} times</div>
        <button>clickes={()}</button>
        <button onClick={()=> {setState({...state,count:state.count + 1, clicks:state.clickes+2})}>
          Click</button>
</div>
    
  )
}

export default App
