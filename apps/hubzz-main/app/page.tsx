import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: 32, fontFamily: 'sans-serif' }}>
      <h1>Hubzz Main</h1>
      <p>Welcome! This is the unified entry point for all Make apps.</p>
      <ul>
        <li><Link href="/make-example">Make Example</Link></li>
        <li><Link href="/make-sample">Make Sample</Link></li>
        {/* Add more links as you add more Make apps */}
      </ul>
    </main>
  );
}
