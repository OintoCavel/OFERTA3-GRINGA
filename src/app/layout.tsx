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
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;900&display=swap" rel="stylesheet" />
        <script
          id="utmify-pixel-config"
          dangerouslySetInnerHTML={{
            __html: `
              window.pixelId = "68f816d0a854355c218fa393";
            `,
          }}
        />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
        <Script
          id="utmify-pixel-script"
          src="https://cdn.utmify.com.br/scripts/pixel/pixel.js"
          strategy="afterInteractive"
          async
          defer
        />
      </body>
    </html>
  );
}
