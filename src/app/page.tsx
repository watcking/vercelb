
"use client";

import React, { useState, useEffect } from 'react';
import { Heading, Flex } from '@/once-ui/components';

export default function Home() {
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
  }, []);

  return (
    <Flex
      fillWidth
      paddingTop="l"
      paddingX="l"
      direction="column"
      alignItems="center"
      flex={1}
      style={{ backgroundColor: '#2C2C2C' }} // Anthracite dark gray background
    >
      <Heading wrap="balance" variant="display-strong-xs" style={{ textAlign: 'center', fontFamily: 'monospace' }}>
        <div style={{ marginTop: '150px', color: '#FFFFFF' }}>{displayText}</div> {/* White text color for contrast */}
      </Heading>
    </Flex>
  );
}
