import resume from "../assets/Resume.pdf";

export function Intro() {
  const handleDownload = () => {
    // Create a temporary anchor element to trigger the download
    const anchor = document.createElement("a");
    anchor.href = resume;
    anchor.download = "Resume.pdf";
    anchor.click();
  };

  return (
    <section id="intro">
      <div className="container m-auto px-4 pt-12 pb-12 sm:pt-20 flex flex-col sm:flex-row gap-6 text-center sm:text-left">
        <div>
          <h2 className="font-bold text-3xl">Hello 👋, I&apos;m Hari,</h2>
          <div>
            <h2 className="font-bold text-3xl mt-1 pb-1 gradiant-text">
              Frontend Developer
            </h2>
          </div>
          <div>
            <p className="mt-4 text-gray-400">
              I&apos;m a frontend developer who loves working with React.js. I
              enjoy creating user-friendly interfaces that look great and work
              well. Let&apos;s connect and collaborate on exciting projects.
              Explore my projects below! 👇
            </p>
            <button
              onClick={handleDownload}
              className="px-8 font-bold shadow-gray-500 shadow-md py-5 mt-5 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700 md:px-4 md:py-3"
            >
              Download resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
