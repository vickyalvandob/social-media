import { ReactNode } from "react";

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div>
      <header>
        <h1>My App</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>© 2026 My App</p>
      </footer>
    </div>
  );
}