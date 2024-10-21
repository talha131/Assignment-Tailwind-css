import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout>
      <div className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-6 text-gray-800">About Us</h1>
          <p className="text-lg text-gray-600">
            We are a company dedicated to delivering high-quality web solutions using modern tools and technologies.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
