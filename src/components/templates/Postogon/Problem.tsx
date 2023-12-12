import React from 'react';
import styles from './Problem.module.css';

const Problem: React.FC = () => {
    return (<>
        <main>
            <section className={styles.sectionHeight}>
                <h1>
                    But here's the issue...</h1>
            </section>
            <div className={styles.contents}>
                <svg viewBox="0 0 1440 4096" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g className="backers">
                        <path d="M-3317 96H387c276.142 0 500 223.858 500 500v1064.51c0 99.41-80.589 180-180 180H434.99c-99.412 0-180.001 80.58-180.001 180V4248" stroke="gray" stroke-width="100" stroke-linecap="round" />
                        <path d="M4379 804H1387c-276.14 0-499.997 223.86-499.997 500v356.51c0 99.41-80.589 180-180 180H434.991c-99.411 0-180 80.59-180 180V4248" stroke="gray" stroke-width="100" stroke-linecap="round" />
                        <path d="M4423 96H1387.02c-276.14 0-500.001 223.858-500.001 500.001V1660.51c0 99.41-80.589 180-180 180H434.995c-99.411 0-180 80.59-180 180l.001 2227.49" stroke="gray" stroke-width="100" stroke-linecap="round" />
                    </g>
                    <g className={styles.fillers}>
                        <path d="M-3317 96H387c276.142 0 500 223.858 500 500v1064.51c0 99.41-80.589 180-180 180H434.99c-99.412 0-180.001 80.58-180.001 180V4248" stroke="gray" stroke-width="100" stroke-linecap="round" />
                        <path d="M4379 804H1387c-276.14 0-499.997 223.86-499.997 500v356.51c0 99.41-80.589 180-180 180H434.991c-99.411 0-180 80.59-180 180V4248" stroke="regrayd" stroke-width="100" stroke-linecap="round" />
                        <path d="M4423 96H1387.02c-276.14 0-500.001 223.858-500.001 500.001V1660.51c0 99.41-80.589 180-180 180H434.995c-99.411 0-180 80.59-180 180l.001 2227.49" stroke="gray" stroke-width="100" stroke-linecap="round" />
                    </g>
                </svg>
                <section className={styles.sectionHeight}>
                    <h2>Perhaps.</h2>
                </section>
                <section className={styles.sectionHeight}>
                    <h2>We could scroll</h2>
                </section>
                <section className={styles.sectionHeight}>
                    <h2>to the root</h2>
                </section>
                <section className={styles.sectionHeight}>
                    <h2>of it.</h2>
                </section>
            </div>
        </main>

    </>);

};

export default Problem;
