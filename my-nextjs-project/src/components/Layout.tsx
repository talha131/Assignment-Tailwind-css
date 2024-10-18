import { ReactNode } from 'react';
import Link from 'next/link';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white py-4">
        <nav className="flex justify-center space-x-6">
          <Link href="/home"><a className="hover:underline">Home</a></Link>
          <Link href="/about"><a className="hover:underline">About</a></Link>
          <Link href="/contact"><a className="hover:underline">Contact</a></Link>
          <Link href="/jobs"><a className="hover:underline">Jobs</a></Link>
          <Link href="/services"><a className="hover:underline">Services</a></Link>
        </nav>
      </header>
      <main className="flex-grow">{children}</main>
      <footer className="bg-gray-800 text-white py-4 text-center">
        © 2024 My Website
      </footer>
    </div>
  );
}

export default Layout;
