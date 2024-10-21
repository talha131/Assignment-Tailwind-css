import Layout from '../components/Layout';

const Contact = () => {
  return (
    <Layout>
      <div className="bg-blue-50 py-16 flex justify-center">
        <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <input className="border border-gray-300 p-3 w-full rounded mb-4" type="text" placeholder="Your Name" />
          <input className="border border-gray-300 p-3 w-full rounded mb-4" type="email" placeholder="Your Email" />
          <textarea className="border border-gray-300 p-3 w-full rounded mb-4" rows={5} placeholder="Your Message"></textarea>
          <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded w-full">
            Send Message
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Contact;
