import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Instagram } from "lucide-react";
import { Twitter } from "lucide-react";
import heroBg from "../assets/images/lagos-background.png";

/**
 * Hero component displays the main introduction section with background image and social links.
 * This component does not accept any props.
 */
function Hero() {
  return (
    <div
      className="h-screen w-screen flex justify-center items-center bg-gray-900 text-white text-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div>
        <h5 className="font-semibold tracking-widest text-orange-700 mb-5">
          Hey.
        </h5>
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-semibold mt-6">
          I`M ABIOLA
        </h1>

        <p className="text-lg mt-6 bg-gray-950 rounded-lg">
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
