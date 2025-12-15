import { sum, greet } from '@shared-utils';

export default function MakeExample() {
  return (
    <main style={{ padding: 32, fontFamily: 'sans-serif' }}>
      <h1>Make Example</h1>
      <p>This is the Make Example app, now a sub-route of hubzz-main.</p>
      <p>Shared utils: <code>{greet('World')}</code> | 2 + 3 = {sum(2, 3)}</p>
    </main>
  );
}
