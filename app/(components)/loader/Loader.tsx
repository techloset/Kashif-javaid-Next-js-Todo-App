const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen  bg-black">
      <div className="animate-spin rounded-full h-32 w-32 border-t-8 border-b-8 border-gray-200" />{" "}
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Loader;
