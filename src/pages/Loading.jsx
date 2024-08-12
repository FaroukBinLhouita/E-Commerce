function LoadingPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex flex-col items-center">
        <div className="spinner-border animate-spin inline-block w-16 h-16 border-4 border-gray-500 border-t-transparent rounded-full"></div>
        <p className="mt-4 text-xl text-gray-700">Loading...</p>
      </div>
    </div>
  );
}

export default LoadingPage;
