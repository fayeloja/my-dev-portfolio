import logo from "../assets/images/network.svg";
import { navItems } from "../constants";
import PropTypes from "prop-types";
import { Menu } from "lucide-react";
import { useState } from "react";

function NavBar({ title }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // !false = true
  };

  return (
    <nav className="sticky top-0 z-50 p-4 bg-white shadow-lg transition-all duration-300 ease-in-out">
      <div className="flex justify-between items-center  mx-auto">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <a href="https://www.fayeloja.name.ng/">
            <img className="h-10 w-10 mr-5" src={logo} alt="logo" />
            <h2>{title}</h2>
          </a>
        </div>

        <div className="rounded-full p-3 border-2 border-gray-800 md:flex">
          <button className="text-gray-600" onClick={toggleMenu}>
            <Menu />
          </button>
        </div>
      </div>
      {isMenuOpen ? (
        <ul className="flex flex-col text-gray-900 justify-items-center text-center">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="py-1 transition-all duration-300 ease-in-out"
            >
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      ) : null}
    </nav>
  );
}
NavBar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default NavBar;
