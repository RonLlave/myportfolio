import "./globals.css";

export const metadata = {
  title: 'Ron Cymond Llave - Full Stack Developer',
  description: 'Portfolio website showcasing my skills and projects as a Full Stack, Frontend, and Backend Developer.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        {children}
      </body>
    </html>
  );
}
