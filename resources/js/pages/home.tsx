import AppLayout from "@/layouts/app-layout";
import { Link } from "@inertiajs/react";

export default function home() {
  return (
    <AppLayout>
      <div>
        <p>Home</p>
        <Link href="/about">Go to About</Link>
      </div>
    </AppLayout>
  );
}
