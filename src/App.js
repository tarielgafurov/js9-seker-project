import { useState } from 'react';
import './App.css';
import Modal from './components/Modal';
import Slider from './components/Slider';




function App() {
  const [modal,setModal] = useState(true)

  const closeModal = ()=>{
    setModal(false)
  }
  return (
    <div className="App">
      {/* <Checkbok/> */}
    {modal &&  <Modal onClose={closeModal}>vhrbhb</Modal>}
   {/* <Slider/> */}

      
    </div>
  );
}

export default App;
