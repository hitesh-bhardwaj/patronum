import { useEffect, useRef } from "react";

const AnimatedCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const blobs = Array.from({ length: 3 }, (_, index) => createBlob(index));

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let animationFrameId;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.filter = 'blur(76px)';

      blobs.forEach((blob) => {
        blob.x += blob.vx;
        blob.y += blob.vy;

        // Bounce on borders
        if (blob.x < 0 || blob.x > canvas.width) blob.vx *= -1;
        if (blob.y < 0 || blob.y > canvas.height) blob.vy *= -1;

        drawBlob(ctx, blob);
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const createBlob = (index) => {
    const colors = [
      "#c2ddff",
      "#d6d9ff",
      "#c2ddff",
    ];
    return {
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      radius: 150 + Math.random() * 100,
      vx: (Math.random() - 0.5) * 5,
      vy: (Math.random() - 0.5) * 3,
      color: colors[index % colors.length],
    };
  };

  const drawBlob = (ctx, blob) => {
    ctx.beginPath();
    ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2);
    ctx.fillStyle = blob.color;
    ctx.fill();
  };

  return <canvas ref={canvasRef} style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }} />;
};

export default AnimatedCanvas;