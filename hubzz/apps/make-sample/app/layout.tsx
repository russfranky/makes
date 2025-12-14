import './globals.css';

export const metadata = {
  title: 'Make Sample',
  description: 'A sample Make app in the hubzz-makes monorepo.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
