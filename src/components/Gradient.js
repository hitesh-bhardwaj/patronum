import { useEffect, useState } from "react";

export default function Gradient() {
    const [isScrolling, setIsScrolling] = useState(false);
    const [maxSpeed, setMaxSpeed] = useState(3.5);

    useEffect(() => {
        // Function to handle scrolling
        const handleScroll = () => {
            setIsScrolling(true);
            clearTimeout(handleScroll.isScrolling);
            handleScroll.isScrolling = setTimeout(() => {
                setIsScrolling(false);
            }, 66); // ~15 fps
        };

        // Add scroll event listener
        window.addEventListener("scroll", handleScroll);

        return () => {
            // Remove scroll event listener on cleanup
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        // Adjust maxSpeed based on isScrolling state
        setMaxSpeed(isScrolling ? 5 : 3.5);

        const MIN_SPEED = 1.5;

        function randomNumber(min, max) {
            return Math.random() * (max - min) + min;
        }

        class Blob {
            constructor(el) {
                this.el = el;
                const boundingRect = this.el.getBoundingClientRect();
                this.size = boundingRect.width;
                this.initialX = randomNumber(0, window.innerWidth - this.size);
                this.initialY = randomNumber(0, window.innerHeight - this.size);
                this.el.style.top = `${this.initialY}px`;
                this.el.style.left = `${this.initialX}px`;
                this.vx = randomNumber(MIN_SPEED, maxSpeed) * (Math.random() > 0.5 ? 1 : -1);
                this.vy = randomNumber(MIN_SPEED, maxSpeed) * (Math.random() > 0.5 ? 1 : -1);
                this.x = this.initialX;
                this.y = this.initialY;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;
                if (this.x >= window.innerWidth - this.size) {
                    this.x = window.innerWidth - this.size;
                    this.vx *= -1;
                }
                if (this.y >= window.innerHeight - this.size) {
                    this.y = window.innerHeight - this.size;
                    this.vy *= -1;
                }
                if (this.x <= 0) {
                    this.x = 0;
                    this.vx *= -1;
                }
                if (this.y <= 0) {
                    this.y = 0;
                    this.vy *= -1;
                }
            }

            move() {
                this.el.style.transform = `translate(${this.x - this.initialX}px, ${
                    this.y - this.initialY
                }px)`;
            }
        }

        function initBlobs() {
            const blobEls = document.querySelectorAll('.bouncing-blob');
            const blobs = Array.from(blobEls).map((blobEl) => new Blob(blobEl));

            function update() {
                requestAnimationFrame(update);
                blobs.forEach((blob) => {
                    blob.update();
                    blob.move();
                });
            }

            requestAnimationFrame(update);
        }

        initBlobs();
    }, [isScrolling]); // Depend on isScrolling to re-initialize blobs when it changes

    return (
            <div class="bouncing-blobs-container">
                <div class="bouncing-blobs-glass"></div>
                <div class="bouncing-blobs">
                    <div class="bouncing-blob bouncing-blob--blue"></div>
                    <div class="bouncing-blob bouncing-blob--white"></div>
                    <div class="bouncing-blob bouncing-blob--purple"></div>
                    <div class="bouncing-blob bouncing-blob--white"></div>
                    <div class="bouncing-blob bouncing-blob--pink"></div>
                </div>
            </div>
    );
}
