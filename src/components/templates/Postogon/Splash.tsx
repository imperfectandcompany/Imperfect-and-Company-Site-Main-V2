import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Splash.module.css';

const words = ['authenticity', 'personalized', 'privacy', 'community', 'creativity', 'inclusive', 'integrated'];
const swapDuration = 2; // Duration of how long each word is displayed in seconds

const Splash: React.FC = () => {
    const circleRefs = useRef<(HTMLSpanElement | null)[]>([]);
    const [currentWord, setCurrentWord] = useState('complicated');
    const [index, setIndex] = useState(0);    

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

          const intervalId = setInterval(() => {
            setIndex((i: number) => (i + 1) % words.length);
        }, swapDuration * 1000);

          return () => {
            circleTl.kill(); // Use circleTl.kill() instead of gsap.killTweensOf()
            clearInterval(intervalId);
          };
    }, []);

    useEffect(() => {
        setCurrentWord(words[index] || '');
    }, [index]);



    return (
        <section className={styles.splash}>
<h1>
                The web is{' '}
                <AnimatePresence mode="wait">
                    <motion.span
                        key={currentWord}
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 20, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className={styles.spanSecondary}
                    >
                        {currentWord}
                    </motion.span>
                </AnimatePresence>
                .
            </h1>
            <div className={styles.splashBg}>
                {Array(8).fill(null).map((_, index) => (
                    <span
                        key={index}
                        className={styles.circle}
                        ref={(el) => {
                            if (el) circleRefs.current[index] = el;
                        }}
                    />
                ))}
            </div>
        </section>
    );
};

export default Splash;