import React, { useState, useEffect } from 'react';
import './App.css';

const SECTIONS = [
  { id: 'screen1', gradient: 'linear-gradient(to right, #333333, #555555)' }, 
  { id: 'screen2', gradient: 'linear-gradient(to right, #0077B6, #00B4D8)' }, 
  { id: 'screen3', gradient: 'linear-gradient(to right, #FF9900, #FF5C00)' }, 
  { id: 'screen4', gradient: 'linear-gradient(to right, #5E548E, #9F86C0)' }, 
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
    const sectionElements = SECTIONS.map(sec => document.getElementById(sec.id)).filter(Boolean);

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const currentSectionId = entry.target.id;
          const newGradient = SECTIONS.find(sec => sec.id === currentSectionId)?.gradient;
          
          if (newGradient) {
            setHeaderGradient(newGradient);
          }
        }
      });
    };
    const options = {
      root: null, 
      rootMargin: '0px 0px -50% 0px', 
      threshold: 0, 
    };

  
    const observer = new IntersectionObserver(observerCallback, options);
    

    sectionElements.forEach(el => observer.observe(el));

    
    return () => {
      sectionElements.forEach(el => observer.unobserve(el));
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
            <h1>¡Hola!</h1>
            <h2>Soy Micaela Tenuta</h2>
            <h3>Full-Stack Web Developer</h3>
          </section>
        </section>
        <section id='screen2' className='screen'>
          <section id='screen2content'>
            <section id='top'>
              <h4>Sobre mí</h4>
            </section>
            <section id='bottom'>
              <img src="/habilidades.png" alt="habilidades" id='habilidades' />
              <h5>Soy Mica, egresada de ORT Argentina y estudiante de ingeniería informatica en la UBA.
Trabajo bien en equipo, cumplo con plazos de entrega y me adapto al trabajo rapidamente.
Trabajo con las metodologías agiles Scrum y kanban</h5>
              <img src="/micafoto.png" alt="foto"  id='fotomica'/>
            </section>
          </section>
        </section>
        <section id='screen3' className='screen'>
          <section id='screen3content'>
            <section id='top2'>
              <h6>Proyectos</h6>
              <h7>recientes</h7>
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
             <h8>Contacto</h8>
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