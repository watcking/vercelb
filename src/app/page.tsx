"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

// Basit Flex bileşeni tanımlandı
const Flex = ({ children, style = {}, ...props }) => (
  <div style={{ display: "flex", ...style }} {...props}>
    {children}
  </div>
);

export default function Home() {
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
        clearInterval(interval); // Yazı tamamlansa bileşen durur
      }
    }, 50); // Her harf için 50ms gecikme

    return () => clearInterval(interval);
  }, []);

  return (
    <Flex
      style={{
        flexDirection: "column",
        alignItems: "center",
        background: 'url("/background.jpg")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      {/* Sosyal Medya Butonları */}
      <Flex style={{ justifyContent: "flex-end", width: "100%", gap: "12px" }}>
        <a href="https://github.com/brkcinar" style={{ textDecoration: "none", color: "white" }}>
          GitHub
        </a>
        <a href="https://x.com/brkkcinar" style={{ textDecoration: "none", color: "white" }}>
          Twitter
        </a>
        <a href="https://www.t.me/brkcinar" style={{ textDecoration: "none", color: "white" }}>
          Telegram
        </a>
      </Flex>

      {/* Ana İçerik */}
      <Flex style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
        <Flex style={{ justifyContent: "center", flex: 1 }}>
          <img
            src="/coconode.png"
            alt="My Logo"
            style={{
              width: "200px",
              height: "auto",
              position: "relative",
              left: "-10%", // Sola doğru biraz kaydırıldı
            }}
          />
        </Flex>

        <Flex style={{ justifyContent: "center", flex: 2 }}>
          <h1 style={{ fontFamily: "monospace", color: "white", textAlign: "center" }}>{displayText}</h1>
        </Flex>
      </Flex>

      {/* Alt Menü */}
      <Flex style={{ marginTop: "40px", width: "100%", justifyContent: "center" }}>
        <div>
          <h2 style={{ color: "white" }}>Mainnet</h2>
          <p style={{ color: "white" }}>Dimension</p>
        </div>
      </Flex>
    </Flex>
  );
}
