import type { Metadata } from 'next';
import '@fontsource/cormorant-garamond/400.css';
import '@fontsource/cormorant-garamond/500.css';
import '@fontsource/cormorant-garamond/600.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/dm-sans/400.css';
import '@fontsource/dm-sans/500.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ritvik Jaiswal — Full-Stack Developer',
  description:
    'Full-stack developer building scalable web applications with clean architecture. Experienced in React, Node.js, and modern web technologies.',
  keywords: [
    'Ritvik Jaiswal',
    'Full-Stack Developer',
    'React',
    'Node.js',
    'TypeScript',
    'Web Development',
  ],
  authors: [{ name: 'Ritvik Jaiswal' }],
  openGraph: {
    type: 'website',
    title: 'Ritvik Jaiswal — Full-Stack Developer',
    description:
      'Full-stack developer building scalable web applications with clean architecture.',
    siteName: 'Ritvik Jaiswal Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ritvik Jaiswal — Full-Stack Developer',
    description:
      'Full-stack developer building scalable web applications with clean architecture.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <header className="site-header">
          <div className="container header-inner">
            <nav className="header-nav">
              <a href="#work" className="header-link">
                Work
              </a>
              <a href="#experience" className="header-link">
                Experience
              </a>
              <a href="#skills" className="header-link">
                Skills
              </a>
              <a href="#contact" className="header-link header-link-accent">
                Contact
              </a>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
