import { ReactNode } from 'react';
import Link from 'next/link';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gray-900 text-white py-4 shadow-md">
        <nav className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-3xl font-extrabold">My Website</h1>
          <div className="space-x-6 text-lg">
            <Link href="/home" className="hover:text-yellow-400">Home</Link>
            <Link href="/about" className="hover:text-yellow-400">About</Link>
            <Link href="/contact" className="hover:text-yellow-400">Contact</Link>
            <Link href="/services" className="hover:text-yellow-400">Services</Link>
            <Link href="/jobs" className="hover:text-yellow-400">Jobs</Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        © 2024 My Website. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
