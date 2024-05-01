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
          <h2 className="font-bold text-3xl">Hello 👋, I&apos;m Adithyan,</h2>
          <div>
            <h2 className="font-bold text-3xl mt-1 pb-1 gradiant-text">
              Developer
            </h2>
          </div>
          <div>
            <p className="mt-4 text-gray-400">
            I am Adithyan.I attend the Government Engineering College in Idukki to study the field of computer science. Since I haven't started concentrating on a specific talent, I'm not sure what to say in my introduction. I'm just an inquisitive student trying things out!
              I started learning to code a little later than I should have because I was still studying biology science in high school. C was the first language ever learned, and then web development. I got bored after a while and started web scraping. days, I resemble a jack-of-all-trades, master-of-none.
              You can look into my projects by clicking <a className="text-blue-400 underline" href="https://github.com/Adithyan1020/">Here</a>
            </p>
            
             
          </div>
        </div>
      </div>
    </section>
  );
}
