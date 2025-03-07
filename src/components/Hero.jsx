import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Instagram } from "lucide-react";
import { Twitter } from "lucide-react";

function Hero() {
  return (
    <div className="w-full h-screen bg-gray-900 text-white py-20 md:py-50 text-center">
      <h1 className="text-5xl md:text-7xl lg:text-7xl xl:text-8xl font-semibold">
        Hi, I`m Fatai Ayeloja
      </h1>
      <p className="bg-gradient-to-r from-orange-500 to-red-800 text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-transparent bg-clip-text mt-4">
        Software Developer | DevOps Engineer
      </p>
      <p className="text-lg md:text-2xl lg:text-2xl mt-6 px-4 md:px-16 lg:px-32 xl:px-64 text-center leading-relaxed">
        I build scalable web applications and automate infrastructure using
        modern tools. Passionate about solving problems with code and
        streamlining development workflows.
      </p>

      <div className="flex justify-center mt-8 gap-4">
        <div className="border-2 border-white p-2 rounded-lg hover:text-orange-600 transition duration-300">
          <a href="#" aria-label="GitHub">
            <Github />
          </a>
        </div>
        <div className="border-2 border-white p-2 rounded-lg hover:text-orange-600 transition duration-300">
          <a href="#" aria-label="LinkedIn">
            <Linkedin />
          </a>
        </div>
        <div className="border-2 border-white p-2 rounded-lg hover:text-orange-600 transition duration-300">
          <a href="#" aria-label="Instagram">
            <Instagram />
          </a>
        </div>
        <div className="border-2 border-white p-2 rounded-lg hover:text-orange-600 transition duration-300">
          <a href="#" aria-label="Twitter">
            <Twitter />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
