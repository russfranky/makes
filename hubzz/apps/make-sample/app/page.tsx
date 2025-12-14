import React from "react";

export default function Home() {
  return (
    <main style={{ padding: 32, fontFamily: 'sans-serif' }}>
      <h1>Welcome to Make Sample!</h1>
      <p>This is a sample Make app in the hubzz-makes monorepo.</p>
      <p>
        Shared utils: <code>{require('@shared-utils').greet('World')}</code>
      </p>
    </main>
  );
}
