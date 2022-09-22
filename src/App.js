import React, { useState } from 'react';

import "rsuite/dist/rsuite.min.css";
import { Carousel1 } from './components/Carousel';
import { Footer1 } from './components/Footer';
import { Locatii } from './components/Locatii';
import { Meniuri1 } from './components/Meniuri';
import { Navbar1 } from './components/Navbar';



function App() {

  const [body, setBody] = useState('acasa');

  function changeBody(e) {
    console.log(e)
    setBody(e)
  }
  console.log({ body })
  return (
    <div>
      <Navbar1 changeBody={changeBody} />
      {body === 'acasa' && <><Carousel1 />  <Footer1 /></>
      }
      {body === 'meniuri' && <> <Meniuri1 /></>
      }
      {body === 'locatii' && <><Locatii /></>
      }

    </div >
  )
}

export default App;
