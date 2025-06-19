import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Instagram } from "lucide-react";
import { Twitter } from "lucide-react";

function Hero() {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gray-900 text-white py-20 md:py-50 text-center ">
      <div>
        <h5 className="font-semibold tracking-widest text-orange-700 mb-5">
          Hey.
        </h5>
        <h1 className="text-5xl md:text-7xl lg:text-9xl xl:text-9xl font-semibold mt-6">
          I`M ABIOLA
        </h1>

        <p className="text-lg md:text-2xl lg:text-2xl mt-6 px-4 md:px-16 lg:px-32 xl:px-64 text-center leading-relaxed">
          DEVELOPER, DESIGNER & DEVOPS ENGINEER
        </p>

        <div className="flex justify-center mt-8 gap-4">
          <div className="border-2 border-white p-2 rounded-lg hover:text-orange-600 transition duration-300">
            <a href="https://github.com/fayeloja" aria-label="GitHub">
              <Github />
            </a>
          </div>
          <div className="border-2 border-white p-2 rounded-lg hover:text-orange-600 transition duration-300">
            <a
              href="https://www.linkedin.com/in/fayeloja/"
              aria-label="LinkedIn"
            >
              <Linkedin />
            </a>
          </div>
          <div className="border-2 border-white p-2 rounded-lg hover:text-orange-600 transition duration-300">
            <a
              href="https://www.instagram.com/fayeloja.design"
              aria-label="Instagram"
            >
              <Instagram />
            </a>
          </div>
          <div className="border-2 border-white p-2 rounded-lg hover:text-orange-600 transition duration-300">
            <a href="https://x.com/fayeloja" aria-label="Twitter">
              <Twitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
