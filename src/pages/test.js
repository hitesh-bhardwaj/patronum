import React from "react";
import Lottie from 'react-lottie-player'

import AnimationData from '@/lotties/rocket-final.json'

export default function Test() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
  
        {/* React */}
        <Lottie
            play
            loop
            animationData={AnimationData}
            style={{ width: 600, height: 600 }}
        />
      </div>
    );  
  }