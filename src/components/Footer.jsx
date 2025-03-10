import World from "../assets/images/globe-world.png";

function Footer() {
  return (
    <div>
      <div className="py-10 xlg:px-60">
        <div className="flex md:flex-row items-center md:justify-between border-t-2 border-gray-400">
          <div>
            <div className="md:hidden justify-center items-center">
              <div className="items-center justify-items-center">
                <img src={World} alt="World" className="w-auto h-50" />
              </div>
            </div>
            <h1 className="md:text-7xl lg:pl-36 text-center md:text-left">
              Based in Lagos, Nigeria
            </h1>
            <p className="text-gray-600 sm:text-3xl md:text-5xl sm:px-20 lg:pl-36 text-center md:text-left">
              Working with clients from all over the world.
            </p>
          </div>
          <div className="hidden md:block">
            <img
              src={World}
              alt="World"
              className="w-auto h-auto md:p-10 lg:px-36"
            />
          </div>
        </div>
      </div>
      <div className="flex py-10 md:py-20 px-8 md:px-36 text-2xl md:text-4xl  justify-between bg-gray-900 text-gray-400">
        <div>
          <p className="sm:w-80">
            Let`s create something people actually need!{" "}
            <span className="text-white hover:text-gray-600">
              <a href="mailto:fayeloja@gmail.com">fayeloja@gmail.com</a>
            </span>
          </p>
          <p className="text-white mt-2 font-extrabold">+234-806-977-5830</p>
        </div>
        <div>
          <ul className="">
            <li>
              <a href="https://github.com/fayeloja">Github</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/fayeloja/">Linkedin</a>
            </li>
            <li>
              <a href="https://dribbble.com/fayeloja">Dribbble</a>
            </li>
            <li>
              <a href="https://www.instagram.com/fayeloja.design">Instagram</a>
            </li>
          </ul>
        </div>
      </div>

      <footer className="bg-gray-900 p-10 text-gray-400">
        <div className="container text-2xl md:text-4xl  mx-auto text-center bottom-0">
          <p>© 2025 DEV ABIOLA</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
