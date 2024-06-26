import React, { useRef, useEffect, useCallback } from 'react';
import { useWindowEventListener } from 'rooks'
import gsap from 'gsap'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
const Intro = () => {
    const $root = useRef();
    const $svg = useRef();
    const $intro = useRef();
    const $animate = useRef();
  
    const handleResize = useCallback(() => {
      const width = $root.current.clientWidth;
      const height = (width * 121) / 874.13;
      $svg.current.style.width = `${width}px`;
      $svg.current.style.height = `${height}px`;
    }, []);
  
    useEffect(() => {
      handleResize();
  
      const tl = gsap.timeline({ delay: 2.5 });
  
      for (let i = 0; i < $animate.current.children.length; i++) {
        const child = $animate.current.children[i];
  
        const dash = child.getTotalLength();
        child.style.strokeDasharray = dash;
        child.style.strokeDashoffset = dash;
  
        tl.to(
          child,
          {
            strokeDashoffset: 0,
            ease: 'power3.out',
            duration: 1.3
          },
          '<=0.1'
        );
      }
  
      gsap.set($svg.current, {
        opacity: 1
      });
  
      gsap.to($intro.current, {
        opacity: 1,
        delay: 2, // Removed dependency on jam3
        ease: 'power3.out',
        duration: 2
      });
    }, [handleResize]);
  
    useWindowEventListener('resize', handleResize);


  return (
    <div ref={$root}  className="skills section-bg">
      <svg ref={$svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 874.13 121" style={{ opacity: 0 }}>
        <title>
          <h1>Hello</h1>
        </title>
        <g id="animate" ref={$animate}>
          <line className="cls-1" x1="9.37" x2="9.37" y2="121" />
          <line className="cls-1" y1="58.56" x2="95.13" y2="58.56" />
          <line className="cls-1" x1="85.48" x2="85.48" y2="120.56" />
          <path className="cls-1" d="M110.81,74.94h76.45s0-35.2-31.63-35.2c0,0-34.26-1.88-34.26,33.88,0,0-.18,39.91,34.26,39.91,27.59,0,31.63-24.47,31.63-24.47" />
          <line className="cls-1" x1="222.34" x2="222.34" y2="121.21" />
          <line className="cls-1" x1="262.34" x2="262.34" y2="121.21" />
          <path className="cls-1" d="M325.09,41H334c19.44.69,33.08,15.37,33.08,35.75,0,20.88-14.31,35.78-34.52,35.78-20.37,0-34.52-14.9-34.52-35.78,0-20.1,13.12-34.67,32.28-35.72" />
        </g>
        <g>
          <circle className="cls-3" cx="565.18" cy="70.53" r="29.68" transform="translate(-2.85 112.32) rotate(-11.32)" />
          <ellipse className="cls-3" cx="332.55" cy="76.78" rx="25.26" ry="27.78" />
          <path className="cls-3" d="M154.41,47.48c-11.62,0-19.87,7.08-22.57,19.7h44.79C175.45,55.73,167.88,47.48,154.41,47.48Z" />
          <path
            className="cls-3"
            d="M.17-69.87H-69.46v276.7h1021V-69.87ZM860.08,1.35l13.85,13.9-48,48L811.51,48.78,858.94,1.35ZM95.31,119.21H75.44V66.34H19.87v52.87H.17V1.35h19.7V49H75.44V1.35H95.31ZM196,81.21H131.17C132.85,95.86,142.28,105,155.75,105c11.12,0,19-5.22,21.22-14.48l17.34,4.38c-4.54,16.33-19,25.76-38.89,25.76-26.94,0-42.27-20.88-42.27-43.78S127.63,33,154.58,33c27.27,0,41.75,19.87,41.75,40.58,0,2.53-.16,6.06-.33,7.58Zm35.69,38.05H213.34V1.35h18.35Zm40.08,0H253.41V1.35h18.36Zm61,1.35c-25.59,0-43.78-18.35-43.78-43.78S307.17,33,332.72,33,376.5,51.36,376.5,76.78s-18.33,43.78-43.78,43.78ZM504.17,74.52a45.72,45.72,0,0,1-70.28,38.42l13.45-15.16a25.9,25.9,0,0,0,37-23.48V21.09H462.48l-.05-19.74h41.74ZM614.84,120H595.05V104.5c-5.49,8.39-17.67,15.48-29.51,15.48a49.47,49.47,0,1,1,0-98.94c12.25,0,24.35,6.93,29.51,15.66V21h19.79Zm156.73,0H751.78V60.62A19.79,19.79,0,0,0,732,40.83h-.43A20,20,0,0,0,712.17,61v59H692.41V60.62a19.8,19.8,0,0,0-19.78-19.8h-.46A20,20,0,0,0,652.83,61v59H633V21h19.79V37.11A27.52,27.52,0,0,1,677.57,21c12.6,0,24.72,7.22,29.68,18.13,5-11.24,16.94-18,29.44-18.13,19.18-.1,34.88,16,34.88,35.14ZM787.84,1.35h37.44V21.77H787.84Zm48.33,119.21-.71.09a32.69,32.69,0,0,1-8.09,0l-1-.13A43,43,0,0,1,788.26,77h20.41a22.61,22.61,0,1,0,38.22-16.33l14.45-14.44a42.92,42.92,0,0,1,12.92,32.53h0A43,43,0,0,1,836.17,120.56Z"
          />
        </g>
      </svg>
      <div className="intro" ref={$intro}>
        <strong>My name is Minh Uyen Nguyen</strong>
        <br />
        As a motivated individual from Vietnam, I journeyed to the US to further my education in Computer Science, with a keen focus on frontend development. Fueled by a passion for continuous learning, my goal is to create digital experiences that are not only functional but visually impactful. Excited to collaborate with like-minded professionals, I aim to contribute to and learn from the advancements in technology. Currently, I am sharpening my frontend development skills, eagerly anticipating the opportunity to apply my knowledge in a professional setting post-graduation.
      </div>
    </div>
  )
}

export default Intro
