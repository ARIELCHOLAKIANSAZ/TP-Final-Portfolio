import React, { useState, useEffect } from 'react';
import './App.css';

const SECTIONS = [
  { id: 'screen1', gradient: 'linear-gradient(to right, #FF0004, #FF8000, #EAE600, #69FB00, #00FFF2, #8080F4, #BF40F5, #FF00F6)' }, 
  { id: 'screen2', gradient: 'linear-gradient(to right, #6600FF, #FF0004)' }, 
  { id: 'screen3', gradient: 'linear-gradient(to right, #FF0000, #FFA600, #EEFF00)' }, 
  { id: 'screen4', gradient: 'linear-gradient(to right, #D9FF00, #00FF26, #0004FF)' }, 
];

function App() {
  const [headerGradient, setHeaderGradient] = useState(SECTIONS[0].gradient);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  };
  useEffect(() => {
    const mainElement = document.querySelector('main');
    if (!mainElement) return;

    const updateGradientOnScroll = () => {
      // Get the current horizontal scroll position
      const scrollLeft = mainElement.scrollLeft;
      // Get the width of a single screen (100vw)
      const screenWidth = window.innerWidth;
      
      // Calculate the current screen index by rounding the scroll position ratio
      // We add half a screen width to the scrollLeft to correctly round to the center of the next screen.
      let screenIndex = Math.round(scrollLeft / screenWidth);
      
      // Ensure index is within the valid range [0, 3]
      screenIndex = Math.max(0, Math.min(SECTIONS.length - 1, screenIndex));
      
      const newGradient = SECTIONS[screenIndex].gradient;
      
      setHeaderGradient(newGradient);
    };

    // Check initial position in case the browser restores scroll state
    updateGradientOnScroll();

    // Attach scroll listener to the main scrolling container
    mainElement.addEventListener('scroll', updateGradientOnScroll);
    
    // Cleanup the event listener on component unmount
    return () => {
      mainElement.removeEventListener('scroll', updateGradientOnScroll);
    };
  }, []); 


const headerStyle = {
backgroundImage: headerGradient,
transition: 'background-image 0.5s ease, background-color 0.5s ease', 
};
  
  return (
    <div className='App-container'>
      <main>
        <header style={headerStyle}>
        <section id='headerbtncontainer'>
          <button id="btn sobre mi" className='headerbtn' onClick={() => scrollToSection('screen2')}>Sobre Mí</button>
          <button id="btn proyectos" className='headerbtn' onClick={() => scrollToSection('screen3')}>Proyectos</button>
          <button id="btn contacto" className='headerbtn' onClick={() => scrollToSection('screen4')}>Contacto</button>
        </section>
      </header>
        <section id='screen1' className='screen'>
          <section id='txt-container'>
            <h1 className='txt' >¡Hola!</h1>
            <h2 className='gradient-text1'>Soy Micaela Tenuta</h2>
            <h3 className='txt'>Full-Stack Web Developer</h3>
          </section>
        </section>
        <section id='screen2' className='screen'>
          <section id='screen2content'>
            <section id='top'>
              <h4 className='gradient-text2'>Sobre mí</h4>
            </section>
            <section id='bottom'>
              <img src="/habilidades.png" alt="habilidades" id='habilidades' />
              <section id='txtscreen2container'>
                <h5 className='txt'>Soy Mica, egresada de ORT Argentina y estudiante de ingeniería informatica en la UBA.
Trabajo bien en equipo, cumplo con plazos de entrega y me adapto al trabajo rapidamente.
Trabajo con las metodologías agiles Scrum y kanban</h5>
              </section>
              
              <img src="/micafoto.png" alt="foto"  id='fotomica'/>
            </section>
          </section>
        </section>
        <section id='screen3' className='screen'>
          <section id='screen3content'>
            <section id='top2'>
              <h6 className='gradient-text3'>Proyectos</h6>
              <h7 className='gradient-text3'>Recientes</h7>
            </section>
            <section id='bottom2'>
              <img src="/feufighters.png" alt="habilidades" id='feufighters' />
              <img src="/neurosafe.png" alt="" id='neurosafe'/>
              <img src="/robolingo.png" alt="foto"  id='robolingo'/>
            </section>
          </section>
        </section>
        <section id='screen4' className='screen'>
          <section id='contactscontainer'>
           <section id='txtcontacto'>
             <h8 className='gradient-text4'>Contacto</h8>
           </section>
           <section id='contactssec'>
              <img src="/contactos.png" alt="contacts" id='contactos'/>
           </section>
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;