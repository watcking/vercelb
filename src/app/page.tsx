"use client";

import React, { useState, useEffect } from 'react';
import { Heading, Text, Flex, Button, Grid, Icon } from '@/once-ui/components';
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
  const [displayText, setDisplayText] = useState(''); // Başlangıç değeri boş string

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText((prev) => prev + fullText[index]);
        index++;
      } else {
        clearInterval(interval); // Tamamlanınca durdur
      }
    }, 50); // Her harf için 50ms gecikme

    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <Flex
      fillWidth
      paddingTop="l"
      paddingX="l"
      direction="column"
      alignItems="center"
      flex={1}
      style={{
        background: 'url(/background.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      {/* Sosyal Medya Butonları */}
      <Flex as="header" fillWidth justifyContent="flex-end" paddingX="l" paddingY="s" gap="12">
        <Button href="https://github.com/brkcinar" prefixIcon="github" size="l" variant="tertiary">
          GitHub
        </Button>
        <Button href="https://x.com/brkkcinar" prefixIcon="twitter" size="l" variant="tertiary">
          Twitter
        </Button>
        <Button href="https://www.t.me/brkcinar" prefixIcon="telegram" size="l" variant="tertiary">
          Telegram
        </Button>
      </Flex>

      {/* Logo ve Yazı Alanı */}
      <Flex as="section" fillWidth maxWidth={68} direction="row" alignItems="center" flex={1} gap="24">
        {/* Logo */}
        <Flex
          style={{
            position: 'absolute',
            left: '16.6%', // 6 parçaya böldük; en soldaki çizgi için %16.6
            top: '20%', // Yukarıdan %20 uzaklık
            transform: 'translate(-50%, 0)', // Tam hizalama
            zIndex: 2,
          }}
        >
          <img
            src="/coconode.png"
            alt="My Logo"
            style={{
              width: '250px', // Logoyu büyüttük
              height: 'auto',
              borderRadius: '10px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          />
        </Flex>

        {/* Yazı Alanı */}
        <Flex
          flex={1}
          alignItems="center"
          justifyContent="center"
          style={{
            marginLeft: '300px', // Logoya dokunmaması için sola boşluk eklendi
          }}
        >
          <Heading
            wrap="balance"
            variant="display-strong-xs"
            style={{
              textAlign: 'center',
              fontFamily: 'monospace',
              color: '#FFFFFF',
              fontSize: '1.5rem',
              lineHeight: '2rem',
            }}
          >
            {displayText}
          </Heading>
        </Flex>
      </Flex>

      {/* Validators Bileşeni */}
      <Flex fillWidth direction="column" alignItems="center" style={{ marginTop: '40px', padding: '20px' }}>
        <Validators />
