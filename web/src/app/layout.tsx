import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hosanger Mikrotrykkeri - Forsiden',
  description: 'Velkommen til Hosanger Mikrotrykkeri',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body>{children}</body>
    </html>
  );
}
