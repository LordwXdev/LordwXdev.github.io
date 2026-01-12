"use client";
import React, { useEffect, useRef } from 'react';

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const typingRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // === BUBBLE ENGINE (YOUR EXACT CODE) ===
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    const bubbles: any[] = [];
    const cursor = { x: width / 2, y: height / 2, radius: 90, active: false };
    const BUBBLE_COUNT = 38;

    class Bubble {
      radius: number; baseX: number; baseY: number; x: number; y: number;
      vx: number; vy: number; mass: number;
      constructor() {
        this.radius = 26 + Math.random() * 30;
        this.baseX = Math.random() * width;
        this.baseY = Math.random() * height;
        this.x = this.baseX;
        this.y = this.baseY;
        this.vx = 0; this.vy = 0;
        this.mass = this.radius * 0.06;
      }
      update() {
        const dx0 = this.baseX - this.x, dy0 = this.baseY - this.y;
        this.vx += dx0 * 0.0025; this.vy += dy0 * 0.0025;
        this.vx *= 0.9; this.vy *= 0.9;
        if (cursor.active) {
          const dx = this.x - cursor.x, dy = this.y - cursor.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const minDist = this.radius + cursor.radius;
          if (dist < minDist && dist > 0.001) {
            const force = (minDist - dist) * 0.035;
            const nx = dx / dist, ny = dy / dist;
            this.vx += nx * force / this.mass; this.vy += ny * force / this.mass;
          }
        }
        this.x += this.vx; this.y += this.vy;
      }
      draw() {
        ctx.save(); ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2); ctx.clip();
        const g = ctx.createRadialGradient(this.x - this.radius * 0.35, this.y - this.radius * 0.45, this.radius * 0.2, this.x, this.y, this.radius);
        g.addColorStop(0, "rgba(255,255,255,0.9)"); g.addColorStop(0.35, "rgba(220,235,255,0.28)");
        g.addColorStop(0.8, "rgba(40,60,80,0.45)"); g.addColorStop(1, "rgba(5,10,25,0.65)");
        ctx.fillStyle = g; ctx.fillRect(this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
        ctx.restore(); ctx.beginPath(); ctx.fillStyle = "rgba(255,255,255,0.9)";
        ctx.ellipse(this.x - this.radius * 0.35, this.y - this.radius * 0.42, this.radius * 0.23, this.radius * 0.28, -0.7, 0, Math.PI * 2); ctx.fill();
      }
    }

    for (let i = 0; i < BUBBLE_COUNT; i++) bubbles.push(new Bubble());
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      bubbles.forEach(b => { b.update(); b.draw(); });
      requestAnimationFrame(animate);
    };
    animate();

    const handleMouseMove = (e: MouseEvent) => { cursor.x = e.clientX; cursor.y = e.clientY; cursor.active = true; };
    const handleMouseLeave = () => cursor.active = false;
    const handleResize = () => { width = canvas.width = window.innerWidth; height = canvas.height = window.innerHeight; };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    // === TYPEWRITER (YOUR EXACT CODE) ===
    const roles = ["Software Developer", "Web Developer", "Mobile Developer"];
    let rIndex = 0, cIndex = 0, deleting = false;
    let typeTimeout: any;

    const typeLoop = () => {
      const el = typingRef.current;
      if (!el) return;
      const text = roles[rIndex];
      if (!deleting) {
        el.textContent = text.slice(0, cIndex++);
        if (cIndex > text.length) { deleting = true; typeTimeout = setTimeout(typeLoop, 1200); return; }
      } else {
        el.textContent = text.slice(0, --cIndex);
        if (cIndex === 0) { deleting = false; rIndex = (rIndex + 1) % roles.length; }
      }
      typeTimeout = setTimeout(typeLoop, deleting ? 50 : 90);
    };
    typeLoop();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      clearTimeout(typeTimeout);
    };
  }, []);

  return (
    <section>
      <canvas id="bubble-canvas" ref={canvasRef}></canvas>
      <div id="center-content">
        <img id="avatar" src="/images/avatar.jpg" alt="Lord" />
        <div id="text-block">
          <p className="welcome">Welcome</p>
          <h1>Hi, I am Lord</h1>
          <h2><span id="typing" ref={typingRef}></span><span id="cursor">|</span></h2>
        </div>
      </div>
      <div id="hero-graphics">
        <img id="coder-img" src="/images/coder.png" alt="Coder" />
        <svg className="arrow-curve" viewBox="0 0 220 160">
          <defs>
            <marker id="arrowhead" markerWidth="8" markerHeight="8" refX="5" refY="3" orient="auto">
              <path d="M0,0 L0,6 L6,3 z" fill="#A5B4FF" />
            </marker>
          </defs>
          <path d="M 40,10 C 120,60 160,100 110,150" fill="none" stroke="#A5B4FF" strokeWidth="3" markerEnd="url(#arrowhead)" />
        </svg>
        <img id="robot-img" src="/images/robot.png" alt="Robot" />
      </div>
    </section>
  );
}