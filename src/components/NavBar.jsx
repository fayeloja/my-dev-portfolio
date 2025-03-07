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
    <nav className="sticky top-0 z-50 p-4 bg-white shadow-lg">
      <div className="flex justify-between items-center  mx-auto">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <img className="h-10 w-10 mr-5" src={logo} alt="logo" />
          <h3 className="text-lg lg:text-2xl">{title}</h3>
        </div>

        <div className="md:hidden">
          <button className="text-gray-600" onClick={toggleMenu}>
            <Menu />
          </button>
        </div>
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex text-2xl bg-amber-600 px-5 py-2 rounded-4xl shadow-lg border-2 border-gray-900 hover:bg-amber-300 hover:animate-pulse hover:animated duration-75">
          <a href="#">Let`s Chat</a>
        </div>
      </div>
      {isMenuOpen ? (
        <ul className="flex-col md:hidden text-gray-900 justify-items-center">
          {navItems.map((item) => (
            <li key={item.id} className="py-1">
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
