import Layout from '../components/Layout';

const Jobs = () => {
  return (
    <Layout>
      <div className="bg-yellow-50 py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Job Openings</h1>
          <p className="text-lg text-gray-600">
            We are looking for talented developers to join our team.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Jobs;
