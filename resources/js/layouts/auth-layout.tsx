import { ReactNode } from "react";
import { Toaster } from "sonner";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center px-4">
      <main className="w-full max-w-md">
          {children}
      </main>
      <Toaster />
    </div>
  );
}