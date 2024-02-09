'use client'
import { useEffect } from "react"
import { Gradient } from "./gradient";

export default function Background(){
    
  useEffect(() => {
    const gradient = new Gradient()
    gradient.initGradient('#gradient-canvas');
  }, []);

  return(
    <>
      <div className="canvas-container">
        <canvas id="gradient-canvas" />
      </div>
    </>
  )
}