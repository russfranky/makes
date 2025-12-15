import './globals.css';

export const metadata = {
  title: 'Hubzz Main',
  description: 'Unified entry for all Make apps.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
