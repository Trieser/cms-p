import React from 'react';

const Hero = () => {
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

        <div className="hero-content">
          <h1>Artisan <span>Coffee</span> Roasters</h1>
          <p>Small-batch roasted from sustainable farms</p>
          <button>Explore Our Selection</button>
        </div>
      </section>
    );
  };
  
  export default Hero;