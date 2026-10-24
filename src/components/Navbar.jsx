
import React, { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full border-b transition-all duration-300 ease-in-out ${
        isScrolled
          ? "border-gray-200 bg-white/95 shadow-lg backdrop-blur-md"
          : "border-transparent bg-white shadow-sm"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-4 transition-all duration-300 sm:px-6 lg:px-8 ${
          isScrolled ? "h-[68px]" : "h-[76px]"
        }`}
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="flex shrink-0 items-center"
        >
          <img
            src="/assets/images/Logo.png"
            alt="ShreeSaiSteel Logo"
            className={`w-auto object-contain transition-all duration-300 ${
              isScrolled ? "h-16" : "h-[72px]"
            }`}
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 lg:flex xl:gap-9">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative py-2 text-sm font-semibold text-gray-700 transition-colors duration-200 hover:text-[#c62828] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#c62828] after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Contact Button */}
        <div className="hidden lg:flex">
          <a
            href="#contact"
            className="group flex h-11 items-center justify-center gap-2 rounded-md bg-[#c62828] px-5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#a91f1f] hover:shadow-md"
          >
            Get in Touch
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 text-gray-900 transition hover:bg-gray-100 lg:hidden"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`absolute left-0 top-full w-full overflow-hidden border-t border-gray-200 bg-white shadow-lg transition-all duration-300 ease-in-out lg:hidden ${
          isMenuOpen
            ? "visible max-h-[450px] translate-y-0 opacity-100"
            : "invisible max-h-0 -translate-y-2 opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col px-4 sm:px-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className="border-b border-gray-100 py-3.5 text-sm font-semibold text-gray-700 transition-colors duration-200 hover:pl-2 hover:text-[#c62828]"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={closeMenu}
            className="my-4 flex items-center justify-center gap-2 rounded-md bg-[#c62828] px-4 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-[#a91f1f]"
          >
            Get in Touch
            <ArrowRight size={16} />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
