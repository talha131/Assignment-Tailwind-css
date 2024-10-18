import Link from 'next/link';
import Layout from '../components/Layout';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50">
      <h1 className="text-5xl font-bold text-blue-600 mb-6">Welcome to My Website</h1>
      <p className="text-lg mb-4">Explore our amazing services and opportunities!</p>
      <Link href="/about">
        <a className="bg-blue-500 text-white px-4 py-2 rounded-lg">Learn More About Us</a>
      </Link>
    </div>
  );
}

export default Home;