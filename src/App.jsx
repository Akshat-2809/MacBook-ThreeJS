import { Canvas } from '@react-three/fiber';
import React from 'react';
import "./style.css";
import { Environment, OrbitControls, ScrollControls } from '@react-three/drei';
import MacContainer from './MacContainer';

function App() {
  return (
    <div className='w-full h-screen'>
      <nav className='px-[2vw] font-["Helvetica_Neue"] py-[3vw] absolute z-10 left-1/2 -translate-x-1/2 h-[7vh] font-[500] gap-8 flex items-center'>
      {["iPad","iPhone","iWatch","MacBook","AirPods", "Services"].map((e)=>(
        <a href="" className='text-black font-[500] text-xl'>{e}</a>
      ))}

      </nav>
      <div className='flex flex-col items-center absolute top-36 font-[700] left-1/2 -translate-x-1/2 text-[3.5vw]'>
        <h3>MacBook Pro.</h3>
        <h5 className='text-[2vw]'>Oh so Pro!</h5>
      </div>
      <Canvas camera={{fov:12, position:[0,-10,220]}}>
      <Environment files={["https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_08_4k.exr"]}/>
    <ScrollControls pages={3}>
      <MacContainer/>
    </ScrollControls>
    </Canvas>
    </div>

  )
}

export default App

