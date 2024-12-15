"use client";

import React from 'react';

import { Heading, Text, Flex, Button, Grid, Icon, InlineCode, Logo, LetterFx, Arrow } from '@/once-ui/components';
import Link from 'next/link';

export default function Home() {
	const links = [
		{
			href: "http://explorer.coco-node.com",
			title: "Explorer",
			description: " ",
		},
		{
			href: "http://www.coco-node.com/",
			title: "Services",
			description: " ",
		},
		{
			href: "http://www.coco-node.com/",
			title: "Introductions",
			description: " ",
		},
	];

	return (
		<Flex
			fillWidth paddingTop="l" paddingX="l"
			direction="column" alignItems="center" flex={1}>
			
			{/* Sosyal medya butonları en üste taşındı */}
			<Flex
				as="header"
				fillWidth
				justifyContent="flex-end"
				paddingX="l"
				paddingY="s"
				gap="12">
				<Button
					href="https://github.com/nikolorenzoo"
					prefixIcon="github" size="l" variant="tertiary">
					GitHub
				</Button>
				<Button
					href="https://x.com/Coskungurcayy"
					prefixIcon="twitter" size="l" variant="tertiary">
					Twitter
				</Button>
				<Button
					href="https://www.t.me/nikolorenzo"
					prefixIcon="telegram" size="l" variant="tertiary">
					Telegram
				</Button>
			</Flex>

			<Flex
  position="relative"
  as="section"
  overflow="hidden"
  fillWidth
  minHeight="0"
  maxWidth={68}
  direction="column"
  alignItems="center"
  flex={1}
>
  <Flex
    as="main"
    direction="column"
    justifyContent="center"
    fillWidth
    fillHeight
    padding="l"
    gap="l"
  >
    <Flex
      mobileDirection="column"
      fillWidth
      gap="24"
      alignItems="center"  // Ortalamak için ekledik
    >
      <Flex
        position="relative"
        flex={2}
        paddingTop="56"
        paddingX="xl"
        alignItems="center"  // Resmi ortalamak için
        justifyContent="center"  // Resmin dikeyde ortalanması için
        style={{ height: 'auto' }} // Yüksekliği otomatik ayarla
      >
        <img
          src="/coconode.png"  // public klasöründeki logo yolu
          alt="My Logo"
          style={{ width: '400px', height: 'auto' }}  // Boyutlandırma yapabilirsiniz
        />
      </Flex>

      <Flex
        position="relative"
        flex={4}
        gap="24"
        marginBottom="104"
        direction="column"
        alignItems="center"  // Yazıyı ortalamak için ekledik
        justifyContent="center"  // Yazıyı dikeyde ortalamak için
        style={{ height: 'auto' }}  // Yüksekliği otomatik ayarla
      >
        <Heading
          wrap="balance"
          variant="display-strong-xs"
          style={{ textAlign: 'center' }}  // Yazının ortalanması için
        >
          <span className="font-code">
            <LetterFx trigger="instant">
              The crypto world is an ecosystem that combines financial freedom and digital innovation with decentralization
            </LetterFx>
          </span>
        </Heading>
      </Flex>
    </Flex>

    <Grid
      radius="l"
      border="neutral-medium"
      borderStyle="solid-1"
      columns="repeat(3, 1fr)"
      tabletColumns="1col"
      mobileColumns="1col"
      fillWidth
    >
      {links.map((link) => (
        <Link
          target="_blank"
          style={{ padding: 'var(--responsive-space-l)' }}
          key={link.href}
          href={link.href}
        >
          <Flex fillWidth paddingY="8" gap="8" direction="column">
            <Flex fillWidth gap="12" alignItems="center">
              <Text variant="body-strong-m" onBackground="neutral-strong">
                {link.title}
              </Text>
              <Icon size="s" name="arrowUpRight" />
            </Flex>
            <Text variant="body-default-s" onBackground="neutral-weak">
              {link.description}
            </Text>
          </Flex>
        </Link>
      ))}
    </Grid>
  </Flex>
</Flex>


			<Flex
				as="footer"
				position="relative"
				fillWidth paddingX="l" paddingY="m"
				justifyContent="space-between">				
			</Flex>
		</Flex>
	);
}
