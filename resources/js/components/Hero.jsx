import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const heroContentRef = useRef(null);
  
  useEffect(() => {
    if (heroContentRef.current) {
      setTimeout(() => {
        heroContentRef.current.classList.add('animate-in');
      }, 300); // Small delay to allow beans to settle
    }
  }, []);

  const generateBeanProps = (index) => {
    const size = Math.random() * 20 + 20;
    const rotate = Math.random() * 60 - 30;
    const duration = Math.random() * 5 + 5;
    const delay = Math.random() * 15;
    const opacity = Math.min(Math.random() * 0.7 + 0.3, 0.9);
    const xMovement = Math.random() * 100 - 50;
    const isJumping = Math.random() > 0.8;
    
    return {
      size,
      rotate,
      duration,
      delay,
      opacity,
      xMovement,
      isJumping,
      key: `bean-${index}`
    };
  };

  return (
    <section className="coffee-hero">
      <div className="bean-layer bean-background">
        {Array.from({ length: 100 }).map((_, i) => {
          const props = generateBeanProps(i);
          return <div className={`coffee-bean ${props.isJumping ? 'jumping' : ''}`} style={{
            '--size': `${props.size}px`,
            '--rotate': `${props.rotate}deg`,
            '--duration': `${props.duration}s`,
            '--delay': `${props.delay}s`,
            '--opacity': props.opacity,
            '--x-movement': `${props.xMovement}px`,
            '--blur': '1px',
            '--z-index': Math.floor(props.opacity * 5),
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }} key={props.key} />;
        })}
      </div>

      <div className="bean-layer bean-foreground">
        {Array.from({ length: 30 }).map((_, i) => {
          const props = generateBeanProps(i + 100);
          return <div className={`coffee-bean ${props.isJumping ? 'jumping' : ''}`} style={{
            '--size': `${props.size}px`,
            '--rotate': `${props.rotate}deg`,
            '--duration': `${props.duration}s`,
            '--delay': `${props.delay}s`,
            '--opacity': props.opacity,
            '--x-movement': `${props.xMovement}px`,
            '--z-index': Math.floor(props.opacity * 10) + 10,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }} key={props.key} />;
        })}
      </div>

      <div 
        ref={heroContentRef}
        className="hero-content opacity-0"
      >
        <h1 className="hero-title">
          <span className="title-line block overflow-hidden">
            <span className="block transform translate-y-full">Artisan</span>
          </span>
          <span className="title-line block overflow-hidden mt-3">
            <span className="block transform translate-y-full"><span className="text-amber-300">Coffee</span> Roasters</span>
          </span>
        </h1>
        <p className="hero-subtitle transform translate-y-8 opacity-0">
          Small-batch roasted from sustainable farms
        </p>
        <button className="hero-button transform translate-y-8 opacity-0">
          Explore Our Selection
        </button>
      </div>
    </section>
  );
};

export default Hero;