'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(useGSAP);

// the original falling dots
const FallingDots = () => {
    const particlesRef = useRef<HTMLDivElement[]>([]);

    useGSAP(() => {
        particlesRef.current.forEach((particle) => {
            gsap.set(particle, {
                width: Math.random() * 3 + 1,
                height: Math.random() * 3 + 1,
                opacity: Math.random(),
                left: Math.random() * window.innerWidth,
                top: Math.random() * (window.innerHeight + 1),
            });

            gsap.to(particle, {
                y: window.innerHeight,
                duration: Math.random() * 10 + 10,
                opacity: 0,
                repeat: -1,
                ease: 'none',
            });
        });
    }, []);

    return (
        <>
            {[...Array(80)].map((_, i) => (
                <div
                    key={i}
                    ref={(el) => {
                        if (el) particlesRef.current[i] = el;
                    }}
                    className="absolute rounded-full bg-white"
                />
            ))}
        </>
    );
};

// drifting nodes that link up when close, like a neural net; the cursor joins in
const LINK_DISTANCE = 140;

const ParticleBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (!canvas || !ctx) return;

        const reduced = window.matchMedia(
            '(prefers-reduced-motion: reduce)',
        ).matches;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const mouse = { x: -9999, y: -9999 };
        let width = 0;
        let height = 0;
        let frame = 0;
        let nodes: { x: number; y: number; vx: number; vy: number; r: number }[] =
            [];

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            const count = Math.round(
                Math.min(90, (width * height) / 16000),
            );
            nodes = Array.from({ length: count }, () => ({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.25,
                vy: (Math.random() - 0.5) * 0.25,
                r: Math.random() * 1.4 + 0.6,
            }));
        };

        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            for (const n of nodes) {
                n.x += n.vx;
                n.y += n.vy;
                if (n.x < 0 || n.x > width) n.vx *= -1;
                if (n.y < 0 || n.y > height) n.vy *= -1;
            }

            const points = [...nodes, { x: mouse.x, y: mouse.y, r: 0 }];
            for (let i = 0; i < points.length; i++) {
                for (let j = i + 1; j < points.length; j++) {
                    const a = points[i];
                    const b = points[j];
                    const d = Math.hypot(a.x - b.x, a.y - b.y);
                    if (d > LINK_DISTANCE) continue;
                    const alpha = (1 - d / LINK_DISTANCE) * 0.22;
                    ctx.strokeStyle = `hsla(188, 100%, 60%, ${j === points.length - 1 ? alpha * 2 : alpha})`;
                    ctx.lineWidth = 0.6;
                    ctx.beginPath();
                    ctx.moveTo(a.x, a.y);
                    ctx.lineTo(b.x, b.y);
                    ctx.stroke();
                }
            }

            for (const n of nodes) {
                ctx.fillStyle = 'hsla(190, 100%, 75%, 0.55)';
                ctx.beginPath();
                ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
                ctx.fill();
            }

            if (!reduced) frame = requestAnimationFrame(draw);
        };

        const onMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };
        const onResize = () => {
            resize();
            if (reduced) draw();
        };

        resize();
        draw();
        window.addEventListener('resize', onResize);
        window.addEventListener('mousemove', onMove);
        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener('resize', onResize);
            window.removeEventListener('mousemove', onMove);
        };
    }, []);

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            <div className="aurora absolute -top-[20%] -left-[10%] size-[60vmax] rounded-full bg-primary/[0.07] blur-[120px] animate-[aurora_18s_ease-in-out_infinite]" />
            <div className="aurora absolute -bottom-[25%] -right-[10%] size-[55vmax] rounded-full bg-secondary/[0.08] blur-[120px] animate-[aurora_22s_ease-in-out_infinite_reverse]" />
            <canvas ref={canvasRef} className="absolute inset-0" />
            <FallingDots />
        </div>
    );
};

export default ParticleBackground;
