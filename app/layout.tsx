import type { Metadata } from 'next';
import './globals.css';

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
      <body>
        {children}
      </body>
    </html>
  );
}
