import { greet } from '@shared-utils';

export default function MakeSample() {
  return (
    <main style={{ padding: 32, fontFamily: 'sans-serif' }}>
      <h1>Make Sample</h1>
      <p>This is the Make Sample app, now a sub-route of hubzz-main.</p>
      <p>Shared utils: <code>{greet('Sample User')}</code></p>
    </main>
  );
}
