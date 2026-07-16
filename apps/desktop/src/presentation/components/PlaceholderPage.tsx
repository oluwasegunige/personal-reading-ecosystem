import type { ReactElement } from 'react';

export const PlaceholderPage = ({ title }: { title: string }): ReactElement => (
  <section>
    <h1>{title}</h1>
    <p className="empty-state">Scaffold only — no product features are implemented yet.</p>
  </section>
);
