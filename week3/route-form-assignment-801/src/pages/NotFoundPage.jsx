import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg text-center w-80 md:w-96">
        <h1 className="text-2xl md:text-3xl font-bold text-red-600 mb-3">
          404 - Page Not Found
        </h1>
        <p className="text-gray-700 mb-6">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link 
          to="/" 
          className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
