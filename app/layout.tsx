import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import './globals.css';
import { JetBrains_Mono } from 'next/font/google';

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Abdou Aziz Ba - Fullstack Developer',
  description: 'Portfolio d\'Abdou Aziz Ba, développeur fullstack passionné par les technologies modernes.',
  keywords: 'developer, fullstack, react, nodejs, portfolio',
  authors: [{ name: 'Abdou Aziz Ba' }],
  openGraph: {
    title: 'Abdou Aziz Ba - Fullstack Developer',
    description: 'Portfolio d\'Abdou Aziz Ba, développeur fullstack passionné.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${jetbrainsMono.className} bg-black relative`}>
        {/* Content */}
        <div className="relative z-10 min-h-screen flex flex-col">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
