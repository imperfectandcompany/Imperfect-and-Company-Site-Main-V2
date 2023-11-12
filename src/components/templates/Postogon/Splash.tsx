import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './Splash.module.css';

const Splash: React.FC = () => {
    const circleRefs = useRef<(HTMLSpanElement | null)[]>([]);

    useLayoutEffect(() => {

        const circleTl = gsap.timeline({ repeat: -1, yoyo: true });
        let circleSize = 1;

        // Filter out any null values
        const circles = circleRefs.current.filter(Boolean);

        circles.forEach(circle => {
            gsap.set(circle, { scale: circleSize });
            circleSize += 0.5;
          });

          circleTl.from(circles, {
            scale: 1,
            stagger: 0.175,
            duration: 0.6,
            ease: "power3.inOut",
          });

          return () => {
            circleTl.kill(); // Use circleTl.kill() instead of gsap.killTweensOf()
          };
          
    }, []);


    return (
        <section className={styles.splash}>
            <h1>The web is <span className={styles.spanSecondary}>complicated</span>.</h1>
            <div className={styles.splashBg}>
                {Array(8).fill(null).map((_, index) => (
                    <span key={index} className={styles.circle} ref={el => {
                        if (el) circleRefs.current[index] = el;
                    }} />
                ))}
            </div>
        </section>
    );
};

export default Splash;