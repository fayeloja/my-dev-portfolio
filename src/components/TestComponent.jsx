function TestComponent() {
  return (
    <>
      <div className="before:content-['sm'] sm:before:content-['md'] md:before:content-['lg'] lg:before:content-['xl'] xl:before:content-['2xl'] 2xl:before:content-['2xl+']">
        <div className="h-screen bg-gray-900 text-white py-20 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold">
            Hi, I'm Fatai Ayeloja
          </h1>
          <p className="bg-gradient-to-r from-orange-500 to-red-800 text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-transparent bg-clip-text mt-4">
            Software Developer | DevOps Engineer
          </p>
          <p className="text-lg md:text-xl lg:text-2xl mt-6 px-4 md:px-16 lg:px-32 leading-relaxed">
            I build scalable web applications and automate infrastructure using
            modern tools. Passionate about solving problems with code and
            streamlining development workflows.
          </p>
        </div>
      </div>
    </>
  );
}

export default TestComponent;
