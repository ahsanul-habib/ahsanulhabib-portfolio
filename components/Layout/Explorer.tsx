'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import ChevronRight from '@/components/icons/ChevronRight';
import styles from '@/styles/Explorer.module.css';

const explorerItems = [
  {
    name: 'home.jsx',
    path: '/',
    icon: 'react_icon.svg',
  },
  {
    name: 'about.html',
    path: '/about',
    icon: 'html_icon.svg',
  },
  {
    name: 'contact.css',
    path: '/contact',
    icon: 'css_icon.svg',
  },
  {
    name: 'projects.js',
    path: '/projects',
    icon: 'js_icon.svg',
  },
  {
    name: 'articles.json',
    path: '/articles',
    icon: 'json_icon.svg',
  },
  {
    name: 'github.md',
    path: '/github',
    icon: 'markdown_icon.svg',
  },
];

const Explorer = () => {
  const [portfolioOpen, setPortfolioOpen] = useState(true);

  return (
    <div className={styles.explorer}>
      <p className={styles.title}>Explorer</p>

      <div>
        <input
          type="checkbox"
          id="portfolio-checkbox"
          className={styles.checkbox}
          checked={portfolioOpen}
          onChange={() => setPortfolioOpen((open) => !open)}
        />

        <label htmlFor="portfolio-checkbox" className={styles.heading}>
          <ChevronRight
            className={styles.chevron}
            style={{
              transform: portfolioOpen ? 'rotate(90deg)' : undefined,
            }}
          />
          Portfolio
        </label>

        {portfolioOpen && (
          <div className={styles.files}>
            {explorerItems.map((item) => (
              <Link href={item.path} key={item.name}>
                <div className={styles.file}>
                  <Image
                    src={`/${item.icon}`}
                    alt={item.name}
                    width={18}
                    height={18}
                  />
                  <p>{item.name}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Explorer;