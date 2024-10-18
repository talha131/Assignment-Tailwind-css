const Error = () => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-50">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-red-600 mb-4">Oops!</h1>
          <p className="text-lg mb-4">Something went wrong!</p>
          <img src="/cartoon-error.png" alt="Error" className="w-64 mx-auto" />
        </div>
      </div>
    );
  }
  
  export default Error;
  