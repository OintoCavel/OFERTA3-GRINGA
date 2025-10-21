import type {Metadata} from 'next';
import { Toaster } from "@/components/ui/toaster";
import './globals.css';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Orgasmic Unleashed',
  description: 'Aprenda a fazer uma mulher gozar com intensidade.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;900&display=swap" rel="stylesheet" />
        <Script
          id="vturb-player-script"
          strategy="afterInteractive"
          src="https://scripts.converteai.net/363a1829-2843-4b85-bbad-f7f249265a4a/players/68f2379a2e660626af40222d/v4/player.js"
        />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}