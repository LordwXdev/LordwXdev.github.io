"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import "./HeroSection.css";

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const typingRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const bubbles: any[] = [];
    const cursor = { x: width / 2, y: height / 2, radius: 90, active: false };

    class Bubble {
      radius: number; baseX: number; baseY: number; x: number; y: number;
      vx: number; vy: number; mass: number;
      constructor() {
        this.radius = 26 + Math.random() * 30;
        this.baseX = Math.random() * width;
        this.baseY = Math.random() * height;
        this.x = this.baseX; this.y = this.baseY;
        this.vx = 0; this.vy = 0; this.mass = this.radius * 0.06;
      }
      update() {
        this.vx += (this.baseX - this.x) * 0.0025;
        this.vy += (this.baseY - this.y) * 0.0025;
        this.vx *= 0.9; this.vy *= 0.9;
        if (cursor.active) {
          const dx = this.x - cursor.x;
          const dy = this.y - cursor.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const minDist = this.radius + cursor.radius;
          if (dist < minDist && dist > 0.1) {
            const force = (minDist - dist) * 0.035;
            this.vx += (dx / dist) * force / this.mass;
            this.vy += (dy / dist) * force / this.mass;
          }
        }
        this.x += this.vx; this.y += this.vy;
      }
      draw() {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.clip();
        const g = ctx.createRadialGradient(this.x - this.radius * 0.35, this.y - this.radius * 0.45, this.radius * 0.2, this.x, this.y, this.radius);
        g.addColorStop(0, "rgba(255,255,255,0.9)");
        g.addColorStop(1, "rgba(5,10,25,0.65)");
        ctx.fillStyle = g;
        ctx.fillRect(this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
        ctx.restore();
      }
    }

    for (let i = 0; i < 35; i++) bubbles.push(new Bubble());
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      bubbles.forEach(b => { b.update(); b.draw(); });
      requestAnimationFrame(animate);
    };
    animate();

    window.onmousemove = (e) => { cursor.x = e.clientX; cursor.y = e.clientY; cursor.active = true; };
    window.onresize = () => { width = canvas.width = window.innerWidth; height = canvas.height = window.innerHeight; };
  }, []);

  useEffect(() => {
    const roles = ["Software Developer", "Web Developer", "AI Enthusiast"];
    let rIdx = 0, cIdx = 0, deleting = false;
    const type = () => {
      const currentRole = roles[rIdx];
      if (typingRef.current) {
        typingRef.current.textContent = currentRole.slice(0, cIdx);
        if (!deleting && cIdx < currentRole.length) { cIdx++; setTimeout(type, 100); }
        else if (deleting && cIdx > 0) { cIdx--; setTimeout(type, 50); }
        else { deleting = !deleting; if (!deleting) rIdx = (rIdx + 1) % roles.length; setTimeout(type, 1000); }
      }
    };
    type();
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      <canvas ref={canvasRef} id="bubble-canvas" />
      <div id="center-content">
        <Image src="/images/avatar.jpg" alt="Profile" width={190} height={190} id="avatar" priority />
        <div id="text-block">
          <p className="welcome">Welcome</p>
          <h1>Hi, I am Lord</h1>
          <h2><span ref={typingRef} id="typing"></span><span id="cursor">|</span></h2>
        </div>
      </div>
      <div id="hero-graphics">
        <Image src="/images/coder.png" alt="" width={260} height={260} id="coder-img" />
        <Image src="/images/robot.png" alt="" width={260} height={260} id="robot-img" />
      </div>
    </section>
  );
}