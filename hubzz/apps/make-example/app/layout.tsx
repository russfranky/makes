import './globals.css';

export const metadata = {
  title: 'Make Example',
  description: 'A example Make app in the hubzz-makes monorepo.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
