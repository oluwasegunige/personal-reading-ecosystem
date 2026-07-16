import type { PropsWithChildren, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
const navigation = [
  ['Home', '/home'],
  ['All Books', '/library'],
  ['Authors', '/authors'],
  ['Series', '/series'],
  ['Collections', '/collections'],
  ['Tags', '/tags'],
  ['Settings', '/settings'],
] as const;
export const AppShell = ({ children }: PropsWithChildren): ReactElement => (
  <div className="desktop-shell">
    <aside className="sidebar">
      <p className="eyebrow">Library</p>
      <nav>
        {navigation.map(([label, path]) => (
          <NavLink key={path} to={path}>
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
    <main className="content">{children}</main>
  </div>
);
