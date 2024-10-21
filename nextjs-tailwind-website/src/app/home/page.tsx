// src/app/home/page.tsx

import Layout from '../components/Layout';

const Home = () => {
  return (
    <Layout>
      <div className="relative bg-gradient-to-r from-yellow-400 via-red-400 to-pink-500 min-h-screen flex items-center justify-center text-center">
        <h1 className="text-6xl font-extrabold text-white mb-4 drop-shadow-md">
          Welcome to My Website
        </h1>
        <p className="text-2xl text-white mb-8">A modern website built with Next.js and Tailwind CSS.</p>
        <a
          href="#"
          className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-full transition"
        >
          Get StartedTalha
        </a>
        <p>Hello World</p>
      </div>
    </Layout>
  );
};

export default Home;

