"use client";
import React, { useEffect, useRef, useState } from 'react';

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [roleText, setRoleText] = useState("");
  
  // --- Typewriter Logic ---
  useEffect(() => {
    const roles = ["Software Developer", "Web Developer", "Mobile Developer"];
    let rIndex = 0;
    let cIndex = 0;
    let deleting = false;
    let timeout: NodeJS.Timeout;

    const typeLoop = () => {
      const currentRole = roles[rIndex];
      if (!deleting) {
        setRoleText(currentRole.slice(0, cIndex++));
        if (cIndex > currentRole.length) {
          timeout = setTimeout(() => (deleting = true), 1200);
        } else {
          timeout = setTimeout(typeLoop, 90);
        }
      } else {
        setRoleText(currentRole.slice(0, cIndex--));
        if (cIndex === 0) {
          deleting = false;
          rIndex = (rIndex + 1) % roles.length;
        }
        timeout = setTimeout(typeLoop, 50);
      }
    };

    typeLoop();
    return () => clearTimeout(timeout);
  }, []);

  // --- Bubble Canvas Logic ---
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const bubbles: Bubble[] = [];
    const cursor = { x: width / 2, y: height / 2, radius: 90, active: false };

    class Bubble {
      radius: number; baseX: number; baseY: number; x: number; y: number;
      vx: number; vy: number; mass: number;

      constructor() {
        this.radius = 26 + Math.random() * 30;
        this.baseX = Math.random() * width;
        this.baseY = Math.random() * height;
        this.x = this.baseX; this.y = this.baseY;
        this.vx = 0; this.vy = 0;
        this.mass = this.radius * 0.06;
      }

      update() {
        const dx0 = this.baseX - this.x;
        const dy0 = this.baseY - this.y;
        this.vx += dx0 * 0.0025;
        this.vy += dy0 * 0.0025;
        this.vx *= 0.9; this.vy *= 0.9;

        if (cursor.active) {
          const dx = this.x - cursor.x;
          const dy = this.y - cursor.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const minDist = this.radius + cursor.radius;
          if (dist < minDist && dist > 0.001) {
            const force = (minDist - dist) * 0.035;
            const nx = dx / dist; const ny = dy / dist;
            this.vx += (nx * force) / this.mass;
            this.vy += (ny * force) / this.mass;
          }
        }
        this.x += this.vx; this.y += this.vy;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.clip();
        const g = ctx.createRadialGradient(
          this.x - this.radius * 0.35, this.y - this.radius * 0.45,
          this.radius * 0.2, this.x, this.y, this.radius
        );
        g.addColorStop(0, "rgba(255,255,255,0.9)");
        g.addColorStop(0.35, "rgba(220,235,255,0.28)");
        g.addColorStop(0.8, "rgba(40,60,80,0.45)");
        g.addColorStop(1, "rgba(5,10,25,0.65)");
        ctx.fillStyle = g;
        ctx.fillRect(this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
        ctx.restore();
        ctx.beginPath();
        ctx.fillStyle = "rgba(255,255,255,0.9)";
        ctx.ellipse(this.x - this.radius * 0.35, this.y - this.radius * 0.42, this.radius * 0.23, this.radius * 0.28, -0.7, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < 38; i++) bubbles.push(new Bubble());

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      bubbles.forEach(b => { b.update(); b.draw(ctx); });
      requestAnimationFrame(animate);
    };
    animate();

    const handleMouseMove = (e: MouseEvent) => {
      cursor.x = e.clientX; cursor.y = e.clientY; cursor.active = true;
    };
    const handleMouseLeave = () => (cursor.active = false);
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black portfolio-gradient">
      {/* Interactive Bubble Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-10" />

      {/* Main Content */}
      <div className="absolute top-1/2 left-[14vw] -translate-y-1/2 z-20 flex items-center gap-5 pointer-events-none">
        <img 
          src="" 
          alt="Avatar" 
          className="w-[190px] h-[190px] rounded-full object-cover shadow-[0_0_25px_rgba(111,191,255,0.9),0_0_60px_rgba(118,91,255,0.7)]" 
        />
        <div className="flex flex-col gap-1">
          <p className="text-[0.9rem] uppercase tracking-[0.18em] text-gray-400">Welcome</p>
          <h1 className="text-[2.7rem] font-bold tracking-wider text-[#E0E3EA]">Hi, I am Lord</h1>
          <h2 className="text-[2rem] font-semibold text-[#B8C2D9]">
            <span>{roleText}</span>
            <span className="animate-pulse">|</span>
          </h2>
        </div>
      </div>

      {/* Hero Graphics (Right Side) */}
      <div className="hidden lg:flex absolute top-[59%] right-[8vw] -translate-y-1/2 flex-col items-center gap-6 z-10 pointer-events-none">
        <img src="/coder.png" className="w-[260px] opacity-85" alt="Coder" />
        
        <svg className="w-[210px] h-[120px]" viewBox="0 0 220 160">
          <defs>
            <marker id="arrowhead" markerWidth="8" markerHeight="8" refX="5" refY="3" orient="auto">
              <path d="M0,0 L0,6 L6,3 z" fill="#A5B4FF" />
            </marker>
          </defs>
          <path d="M 40,10 C 120,60 160,100 110,150" fill="none" stroke="#A5B4FF" strokeWidth="3" markerEnd="url(#arrowhead)" />
        </svg>

        <img src="/robot.png" className="w-[260px] opacity-85" alt="Robot" />
      </div>
    </section>
  );
}