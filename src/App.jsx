import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App-container'>
      <main>
        <header>
           <img src="/TopBar.png" alt="topbar" id='topbar'/>
        </header>
       <section id='screen1' className='screen'>
           <img src="/Portada (1).png" alt="portada" />
           <section id='textsec1'>
            <h1 className='screen1text'>Ariel</h1>
            <h2 className='screen1text'>Cholakian Zas</h2>
            <h3 className='screen1text'>Front-End Web Developer • Game</h3>
            <h4 className='screen1text'>Developer • 3D/2D Designer</h4>
           </section>
       </section>
       <section id='screen2' className='screen'>
       </section>
       <section id='screen3' className='screen'>

       </section>
       <section id='screen4' className='screen'>

       </section>
       </main>
    </div>
  )
}

export default App
