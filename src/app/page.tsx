"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Validators from "../components/Validators";

export default function Home() {
  const links = [
    { href: "http://explorer.hibunode.com", title: "Explorer", description: "" },
    { href: "http://www.hibunode.com/", title: "Services", description: "" },
    { href: "http://www.hibunode.com/", title: "Introductions", description: "" },
  ];

  const fullText =
    "Blockchain technology is reshaping financial systems while offering a vision of independence empowered by digital innovation. As a professional validator in this sector, I take pride in ensuring the reliability of networks and contributing to the growth of the ecosystem.";
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText((prev) => prev + fullText[index]);
        index++;
      } else {
        clearInterval(interval); // Stop the animation when complete
      }
    }, 50); // 50ms per character

    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'url(/background.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: '20px',
      }}
    >
      {/* Sosyal medya butonları */}
      <header style={{ display: 'flex', justifyContent: 'flex-end', width: '100%', gap: '12px' }}>
        <a href="https://github.com/brkcinar" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://x.com/brkkcinar" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://www.t.me/brkcinar" target="_blank" rel="noopener noreferrer">Telegram</a>
      </header>

      {/* Ana içerik */}
      <main style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '24px' }}>
        <img
          src="/coconode.png"
          alt="My Logo"
          style={{ width: '300px', height: 'auto' }}
        />
        <h1 style={{ textAlign: 'center', color: '#FFFFFF', fontFamily: 'monospace', fontSize: '1.5rem', lineHeight: '2rem' }}>
          {displayText}
        </h1>
      </main>

      {/* Validators bileşenini ekleme */}
      <div style={{ marginTop: '40px', padding: '20px', width: '100%' }}>
        <Validators />
      </div>

      {/* Footer */}
      <footer style={{ marginTop: '24px', textAlign: 'center', width: '100%' }}>
        {links.map((link) => (
          <div key={link.href}>
            <Link href={link.href}>
              <a>{link.title}</a>
            </Link>
          </div>
        ))}
      </footer>
    </div>
  );
}
