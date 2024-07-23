export default function About() {
  return (
    <div
      id="about"
      className="h-[95vh] w-full bg-rachelCream flex items-center justify-center space-x-16"
    >
      <div className="flex flex-col items-center space-y-4">
        <img src="./misc/headshot.jpg" className="h-[65vh] rounded-[50px]" />
        <div className="flex space-x-16">
          <a href="mailto:rcj.rachel@gmail.com">
            <img src="./icons/email.png" className="h-[9vh]" />
          </a>
          <a href="https://www.linkedin.com/in/rcjan/">
            <img src="./icons/linkedin.png" className="h-[9vh]" />
          </a>
          <a href="https://github.com/racheljayi">
            <img src="./icons/github.png" className="h-[9vh]" />
          </a>
        </div>
      </div>

      <div className="text-left w-[40vw] text-2xl font-phantomSans">
        <p className="">Hi! My name is...</p>
        <h1 className="text-right text-rachelBlue text-5xl font-extrabold font-phantomSans">
          Rachel
        </h1>
        <h1 className="text-right text-rachelBlue text-5xl font-extrabold font-phantomSans">
          Jan
        </h1>

        <p className="">
          I'm an undergraduate computer science student currently based in
          Pittsburgh. My career interests include software engineering, machine
          learning and AI, and game development.
          <br />
          <br />
          Feel free to contact me at{" "}
          <a href="mailto:rcj.rachel@gmail.com">rcj.rachel@gmail.com</a>
        </p>
      </div>
    </div>
  );
}
