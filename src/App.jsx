import './App.css'
import { useState } from 'react';


function App() {
  const [bgColor, setBgColor] = useState('main-container-bg-default')

  const handleRedBtnClick = () =>{
    setBgColor('main-container-bg-red')
  }

  const handleGreenBtnClick = () =>{
    setBgColor('main-container-bg-green')
  }

  const handleBlueBtnClick = () =>{
    setBgColor('main-container-bg-blue')
  }
  
  return (
    <div className={`main-container ${bgColor}`}>
      <div className='buttons-card'>
        <button class="btn btn-red" onClick={handleRedBtnClick}>Red</button>
        <button class="btn btn-green" onClick={handleGreenBtnClick}>Green</button>
        <button class="btn btn-blue" onClick={handleBlueBtnClick}>Blue</button>
      </div>
    </div>
  )
}

export default App
