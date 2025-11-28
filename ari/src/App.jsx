import React from 'react'
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth', 
        block: 'start'      
      });
    }
  };
 
  return (
    <div className='App-container'>
      <main>
        <header>
          <section id='headerbtncontainer'>
           <button id="btn menu principal" className='headerbtn' onClick={()=>scrollToSection('screen1')}>Menú Principal</button>
           <button id="btn sobre mi" className='headerbtn'onClick={()=>scrollToSection('screen2')}>Sobre Mí</button>
           <button id="btn proyectos" className='headerbtn' onClick={()=>scrollToSection('screen3')}>Proyectos</button>
           <button id="btn contacto" className='headerbtn' onClick={()=>scrollToSection('screen4')}>Contacto</button>
          </section>
           <img src="/Rectangle 1.png" alt="topbar" id='topbar'/>
        </header>
       <section id='screen1' className='screen'>
        <section id='screen1bckgs' className='backgrounds'>
           <img src="/Portada (1).png" alt="portada" id='portada'/>
           <img src="/Portada (1).png" alt="portada" id='portada2'/>
        </section>
           
           <section id='textsec1'>
            <h1 className='screen1text'>Ariel</h1>
            <h2 className='screen1text'>Cholakian Zas</h2>
            <h3 className='screen1text'>Front-End Web Developer • Game</h3>
            <h4 className='screen1text'>Developer • 3D/2D Designer</h4>
           </section>
       </section>
       <section id='screen2' className='screen'>
        <section id='screen2bckgs' className='backgrounds'>
           <img src="/Sobre Mí (1).png" alt="backgroung" id='screen2-background'/>
           <img src="/Sobre Mí (1).png" alt="backgroung" id='screen2-background2'/>
        </section>
         <section id='screen2-components'>
           <img src="/sobremi.png" alt="sobremi" id='sobremi'/>
           <img src="/habilidades.png" alt="habilidades" id='habilidades'/>
         </section>
      
       </section>
       <section id='screen3' className='screen'>
          <img src="/Proyectos.png" alt="proyectosbckgound" id='proyectosbckground' className='backgrounds'/>
         <section id='projectscontainer'>
           <section id='bannersec'>
             <img src="/screen3banner.png" alt="proyectosrecientes" id='banner'/>
           </section>
           <section id='projectsec'>
              <img src="/robolingo.png" alt="robolingo" id='robolingo' />
              <img src="/rampagearena.png" alt="rampagearena" id='rampagearena' />
              <img src="/feufighters.png" alt="feufighters" id='feufighters' />
           </section>
          </section>
         
       </section>
       <section id='screen4' className='screen'>
          <img src="/Contacto.png" alt="contactosbckgound" id='contactosbckground' className='backgrounds'/>
         <section id='contactscontainer'>
           <section id='bannersec2'>
             <img src="/banner2.png" alt="banner" id='banner2'/>
           </section>
           <section id='contactssec'>
              <img src="/contactos.png" alt="contacts" id='contactos'/>
           </section>
          </section>
         
       </section>
       </main>
    </div>
  )
}

export default App
