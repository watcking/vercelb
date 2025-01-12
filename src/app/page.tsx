"use client";

import React, { useState, useEffect } from 'react';
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
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <div
      style={{
        background: 'url(/background.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      {/* Sosyal Medya Butonları */}
      <header
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          padding: '10px 20px',
          gap: '12px',
        }}
      >
        <a
          href="https://github.com/brkcinar"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#FFFFFF', textDecoration: 'none' }}
        >
          GitHub
        </a>
        <a
          href="https://x.com/brkkcinar"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#FFFFFF', textDecoration: 'none' }}
        >
          Twitter
        </a>
        <a
          href="https://www.t.me/brkcinar"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#FFFFFF', textDecoration: 'none' }}
        >
          Telegram
        </a>
      </header>

      {/* Ana İçerik */}
      <main
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '20px',
          color: '#FFFFFF',
        }}
      >
        <img
          src="/coconode.png"
          alt="My Logo"
          style={{ maxWidth: '300px', marginBottom: '20px' }}
        />
        <h1 style={{ fontSize: '1.5rem', lineHeight: '2rem', fontFamily: 'monospace' }}>
          {displayText}
        </h1>
      </main>

      {/* Validators */}
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <Validators />
      </div>

      {/* Footer */}
      <footer
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#000000',
          padding: '20px 0',
        }}
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              margin: '0 15px',
              color: '#00FFFF',
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
          >
            {link.title}
          </a>
        ))}
      </footer>
    </div>
  );
}
