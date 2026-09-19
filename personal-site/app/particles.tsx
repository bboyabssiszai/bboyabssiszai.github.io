'use client';
import { useEffect, useRef } from 'react';
export default function Particles() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    let w=0, h=0, frame=0, last=0;
    const mouse = {x:-1000,y:-1000};
    let dots: {x:number;y:number;vx:number;vy:number;r:number;phase:number}[]=[];
    const resize = () => {
      w = canvas.clientWidth; h = canvas.clientHeight;
      const dpr=Math.min(devicePixelRatio||1,2);
      canvas.width=w*dpr;canvas.height=h*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);
      dots=Array.from({length:Math.min(150,Math.max(45,Math.floor(w*h/7300)))},()=>({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.42,vy:(Math.random()-.5)*.42,r:Math.random()*1.6+.8,phase:Math.random()*Math.PI*2}));
    };
    const draw = (now:number) => {
      const dt=Math.min((now-last)/16.67,2)||1;last=now;
      ctx.clearRect(0,0,w,h);
      const light=document.documentElement.dataset.theme==='light';
      const color=light?'22,140,70':'56,231,122';
      for (const p of dots) {
        if (!media.matches) {
          p.x+=p.vx*dt;p.y+=p.vy*dt;
          if(p.x < -10)p.x=w+10;if(p.x>w+10)p.x=-10;
          if(p.y < -10)p.y=h+10;if(p.y>h+10)p.y=-10;
        }
        const opacity=.48+.28*Math.sin(now*.0007+p.phase);
        ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle=`rgba(${color},${opacity})`;
        ctx.shadowBlur=light?0:12;ctx.shadowColor=`rgba(${color},.8)`;ctx.fill();ctx.shadowBlur=0;
        const md=Math.hypot(p.x-mouse.x,p.y-mouse.y);
        if(md<210) {ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(mouse.x,mouse.y);ctx.strokeStyle=`rgba(${color},${(1-md/210)*.7})`;ctx.lineWidth=.8;ctx.stroke();}
      }
      for(let i=0;i<dots.length;i++) for(let j=i+1;j<dots.length;j++) {
        const a=dots[i],b=dots[j],d=Math.hypot(a.x-b.x,a.y-b.y);
        if(d<145) {ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.strokeStyle=`rgba(${color},${(1-d/145)*.3})`;ctx.lineWidth=.65;ctx.stroke();}
      }
      if(!media.matches && !document.hidden)frame=requestAnimationFrame(draw);
    };
    const restart=()=>{cancelAnimationFrame(frame);last=performance.now();draw(last);};
    const move=(e:PointerEvent)=>{const rect=canvas.getBoundingClientRect();mouse.x=e.clientX-rect.left;mouse.y=e.clientY-rect.top;};
    const leave=()=>{mouse.x=mouse.y=-1000;};
    const onResize=()=>{resize();restart();};
    const observer=new MutationObserver(()=>{if(media.matches)restart();});
    observer.observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});
    resize();restart();window.addEventListener('resize',onResize);window.addEventListener('pointermove',move);document.addEventListener('pointerleave',leave);document.addEventListener('visibilitychange',restart);media.addEventListener('change',restart);
    return()=>{cancelAnimationFrame(frame);observer.disconnect();window.removeEventListener('resize',onResize);window.removeEventListener('pointermove',move);document.removeEventListener('pointerleave',leave);document.removeEventListener('visibilitychange',restart);media.removeEventListener('change',restart);};
  },[]);
  return <canvas className="particles" ref={ref} aria-hidden="true"/>;
}
