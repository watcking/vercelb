"use client";

import React, { useState, useEffect } from "react";

// Flex bileşeni yukarıda tanımlandı

const Home: React.FC = () => {
  const links = [
    { href: "http://explorer.hibunode.com", title: "Explorer", description: "" },
    { href: "http://www.hibunode.com/", title: "Services", description: "" },
    { href: "http://www.hibunode.com/", title: "Introductions", description: "" },
  ];

  const fullText =
    "Blockchain technology is reshaping financial systems while offering a vision of independence empowered by digital innovation. As a professional validator in this sector, I take pride in ensuring the reliability of networks and contributing to the growth of the ecosystem.";
  const [displayText, setDisplayText] = useState("");

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
  }, []);

  return (
    <Flex
      style={{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
        background: "url(/background.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Sosyal medya butonları */}
      <Flex style={{ position: "absolute", top: "20px", right: "20px", gap: "12px" }}>
        <a href="https://github.com/brkcinar" style={{ color: "white", textDecoration: "none" }}>
          GitHub
        </a>
        <a href="https://x.com/brkkcinar" style={{ color: "white", textDecoration: "none" }}>
          Twitter
        </a>
        <a href="https://www.t.me/brkcinar" style={{ color: "white", textDecoration: "none" }}>
          Telegram
        </a>
      </Flex>

      {/* Logo */}
      <Flex
        style={{
          position: "absolute",
          top: "100px",
          left: "16.6%",
          transform: "translateX(-50%)",
        }}
      >
        <img
          src="/coconode.png"
          alt="My Logo"
          style={{
            width: "200px",
            height: "auto",
          }}
        />
      </Flex>

      {/* Hareketli Yazı */}
      <Flex style={{ flexDirection: "column", alignItems: "center", marginTop: "180px", padding: "20px" }}>
        <p
          style={{
            color: "white",
            fontSize: "1.5rem",
            lineHeight: "2rem",
            textAlign: "center",
            fontFamily: "monospace",
          }}
        >
          {displayText}
        </p>
      </Flex>

      {/* Linkler */}
      <Flex
        style={{
          marginTop: "50px",
          width: "80%",
          justifyContent: "space-around",
          alignItems: "center",
          flexWrap: "wrap",
          background: "rgba(0, 0, 0, 0.7)",
          borderRadius: "8px",
          padding: "16px",
        }}
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "1.2rem",
              margin: "10px",
            }}
          >
            {link.title}
          </a>
        ))}
      </Flex>
    </Flex>
  );
};

export default Home;
