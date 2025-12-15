import React from "react";
import { greet } from '@shared-utils';

export default function Home() {
  return (
    <main style={{ padding: 32, fontFamily: 'sans-serif' }}>
      <h1>Welcome to Make Example!</h1>
      <p>This is a example Make app in the hubzz-makes monorepo.</p>
      <p>
        Shared utils: <code>{greet('World')}</code>
      </p>
    </main>
  );
}
