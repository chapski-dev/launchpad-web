import React, { FC } from 'react';

import styles from './page.module.css';

interface IHomeViewProps { }

export const HomeView: FC<IHomeViewProps> = () => (
  <main className={styles.main}>

    <div className={styles.grid}>
      <a
        className={styles.card}
        href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        rel="noopener noreferrer"
        target="_blank"
      >
        <h2>
          Docs <span>-&gt;</span>
        </h2>
        <p>Find in-depth information about Next.js features and API.</p>
      </a>

      <a
        className={styles.card}
        href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        rel="noopener noreferrer"
        target="_blank"
      >
        <h2>
          Learn <span>-&gt;</span>
        </h2>
        <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
      </a>

      <a
        className={styles.card}
        href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        rel="noopener noreferrer"
        target="_blank"
      >
        <h2>
          Templates <span>-&gt;</span>
        </h2>
        <p>Explore starter templates for Next.js.</p>
      </a>

      <a
        className={styles.card}
        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        rel="noopener noreferrer"
        target="_blank"
      >
        <h2>
          Deploy <span>-&gt;</span>
        </h2>
        <p>
          Instantly deploy your Next.js site to a shareable URL with Vercel.
        </p>
      </a>
    </div>
  </main>
);
