import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <link rel="icon" type="image/png" href="/assets/favicon-32x32.png" sizes="32x32" />
      <link rel="icon" type="image/png" href="/assets/favicon-16x16.png" sizes="16x16" />
      <link rel="apple-touch-icon" href="/assets/apple-touch-icon.png" />

      <body>{children}</body>
    </html>
  );
}
