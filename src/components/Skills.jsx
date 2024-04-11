import "../App.css";
import { useRef } from "react";
import { useEffect } from "react";

export function Skills() {
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const fillPercentage = entry.target.getAttribute("data-fill");
          entry.target.style.width = `${fillPercentage}%`;
          entry.target.classList.add("fill-animation");
          observer.current.unobserve(entry.target);
        }
      });
    });

    document.querySelectorAll(".progress-bar").forEach((item) => {
      observer.current.observe(item);
    });

    return () => observer.current.disconnect();
  }, []);

  return (
    <>
      <section className="py-10" id="technologies">
        <div className="container m-auto px-4">
          <h2 className="text-2xl font-semibold">Technical Skills</h2>
          <div className="mt-14">
            <div className="skill">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold">HTML</h2>
              </div>
              <span
                className="progress-bar w-0 h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md"
                data-fill="100"
              />
            </div>
            <div className="mt-8 skill">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold">
                  CSS, TailwindCSS, Bootstrap, Styled Components
                </h2>
              </div>
              <span
                className="progress-bar w-0 h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md"
                data-fill="90"
              />
            </div>
            <div className="mt-8 skill">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold">JavaScript</h2>
              </div>
              <span
                className="progress-bar w-0 h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md"
                data-fill="80"
              />
            </div>
            <div className="mt-8 skill">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold">React js</h2>
              </div>
              <span
                className="progress-bar w-0 h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md"
                data-fill="90"
              />
            </div>
            <div className="mt-8 skill">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold">Redux</h2>
              </div>
              <span
                className="progress-bar w-0 h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md"
                data-fill="70"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Additional skills section */}
      <section>
        <div className="container m-auto px-4 py-14">
          <h2 className="text-2xl font-semibold">Tools Used</h2>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-14 mt-12 w-[100%]">
            <div>
              <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                Git
              </p>
            </div>
            <div>
              <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                Github
              </p>
            </div>
            <div>
              <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                Vite
              </p>
            </div>
            <div>
              <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                Create-react-app
              </p>
            </div>
            <div>
              <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                Npm
              </p>
            </div>
            <div>
              <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                Webpack
              </p>
            </div>
            <div>
              <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                Babel
              </p>
            </div>
            <div>
              <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                VS Code
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
