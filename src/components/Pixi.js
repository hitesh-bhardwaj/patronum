import SimplexNoise from 'simplex-noise';
import debounce from 'debounce';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

export default function Pixi() {

    const canvasRef = useRef(null);
    useEffect(() => {
        gsap.to(canvasRef.current, {
            opacity: 1,
            duration: 2,
            delay: 3
        });
    }, [])

    useEffect(() => {
        import('pixi.js').then((PIXI) => {
            import('@pixi/filter-kawase-blur').then(({ KawaseBlurFilter }) => {

            function random(min, max) {
                return Math.random() * (max - min) + min;
            }
            
            function map(n, start1, end1, start2, end2) {
                return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
            }
            
            const simplex = new SimplexNoise();

            const getColorFromCSSVar = (varName) => {
                const color = getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
                return PIXI.utils.string2hex(color);
            };

            const colors = [
                getColorFromCSSVar('--orb-color-1'),
                getColorFromCSSVar('--orb-color-2'),
                getColorFromCSSVar('--orb-color-3')
            ];
            
            class Orb {
                constructor(fill = 0x000000) {
                this.bounds = this.setBounds();
                this.x = random(this.bounds["x"].min, this.bounds["x"].max);
                this.y = random(this.bounds["y"].min, this.bounds["y"].max);
            
                this.scale = 1;
            
                this.fill = fill;
            
                this.radius = random(window.innerHeight / 5, window.innerHeight / 3);
            
                this.xOff = random(0, 1000);
                this.yOff = random(0, 1000);
                this.inc = 0.001;
            
                this.graphics = new PIXI.Graphics();
                this.graphics.alpha = 0.825;
            
                window.addEventListener(
                    "resize",
                    debounce(() => {
                    this.bounds = this.setBounds();
                    }, 1000)
                );
                }
            
                setBounds() {
                const maxDist =
                    window.innerWidth < 1400 ? window.innerWidth / 1 : window.innerWidth / 1.75;
                const originX = window.innerWidth / 2;
                const originY =
                    window.innerWidth < 1000
                    ? window.innerHeight
                    : window.innerHeight / 1.75;
            
                return {
                    x: {
                    min: originX - maxDist,
                    max: originX + maxDist
                    },
                    y: {
                    min: originY - maxDist,
                    max: originY + maxDist
                    }
                };
                }
            
                update() {
                const xNoise = simplex.noise2D(this.xOff, this.xOff);
                const yNoise = simplex.noise2D(this.yOff, this.yOff);
                const scaleNoise = simplex.noise2D(this.xOff, this.yOff);
            
                this.x = map(xNoise, -1, 1, this.bounds["x"].min, this.bounds["x"].max);
                this.y = map(yNoise, -1, 1, this.bounds["y"].min, this.bounds["y"].max);
                this.scale = map(scaleNoise, -1, 1, 0.5, 1);
            
                this.xOff += this.inc;
                this.yOff += this.inc;
                }
            
                render() {
                this.graphics.x = this.x;
                this.graphics.y = this.y;
                this.graphics.scale.set(this.scale);
            
                this.graphics.clear();
            
                this.graphics.beginFill(this.fill);
                this.graphics.drawCircle(0, 0, this.radius);
                this.graphics.endFill();
                }
            }
            
                // Create PixiJS app
                const app = new PIXI.Application({
                    view: document.querySelector(".orb-canvas"),
                    resizeTo: window,
                    transparent: true
                });
            
                app.stage.filters = [new KawaseBlurFilter(30, 30)];
            
                // Create orbs
                const orbs = [];
            
                for (let i = 0; i < 3; i++) {
                    const orb = new Orb(colors[i]);
                    app.stage.addChild(orb.graphics);
                    orbs.push(orb);
                }
            
                // Animate!
                if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
                    app.ticker.add(() => {
                        orbs.forEach((orb) => {
                        orb.update();
                        orb.render();
                        });
                    });
                } else {
                    orbs.forEach((orb) => {
                    orb.update();
                    orb.render();
                    });
                }
            });
        });
    }, []);
        
    return (
        <>
            <canvas className="orb-canvas" ref={canvasRef} />
        </>
    )
}