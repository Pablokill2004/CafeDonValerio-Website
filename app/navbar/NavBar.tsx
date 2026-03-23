"use client";

import { useState } from "react";
import { FiUser, FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "../../components/others/ThemeToggle";
import Link from "next/link";

// Shared text styles for all navigation links
const commonNavStyles = "font-navbar uppercase tracking-[0.2em] text-sm text-natural-foreground";

//  NavItem component for navigation links with hover effect
const NavItem = ({ label,href }: { label: string; href: string }) => {
  /*
  - handleClick function checks if the `href` is an anchor link (starts with "#")
  - If it is, it prevents the default link behavior, finds the target element by ID, and scrolls to it smoothly
  - It also updates the URL hash without causing a page jump
  - Fix the issue of the page jumping to the top when clicking on anchor links by preventing default
    behavior and implementing smooth scrolling manually.
   */

   const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
     if (href.startsWith("#")) {
       e.preventDefault();
       const element = document.getElementById(href.replace("#", ""));
       if (element) {
         element.scrollIntoView({ behavior: "smooth" });
         window.history.pushState(null, "", href);
       }
     }
   };

   return (
    <div className="cursor-pointer relative overflow-hidden group">
      <Link href={href} onClick={handleClick} className={`${commonNavStyles} block transition-transform duration-300 group-hover:translate-y-full`}>
        {label}
      </Link>
      <Link href={href} onClick={handleClick} className={`${commonNavStyles} absolute inset-0 -translate-y-full transition-transform duration-300 group-hover:translate-y-0`}>
        {label}
      </Link>
    </div>
  );
};

// MobileNavItem component for mobile navigation links with hover effect and click handler to close the menu
const MobileNavItem = ({ label, href, onClick }: { label: string; href: string; onClick: () => void }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.getElementById(href.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", href);
      }
    }
    onClick();
  };

  return (
    <Link
      href={href}
      className={`${commonNavStyles} hover:text-white transition-colors block py-2`}
      onClick={handleClick}
    >
      {label}
    </Link>
  );
};

// MobileMenuDinamycButton component to toggle the mobile menu open and closed
const MobileMenuDinamycButton = ({ mobileMenuOpen, setMobileMenuOpen }: { mobileMenuOpen: boolean; setMobileMenuOpen: (open: boolean) => void }) => {
  return (
     <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex items-center justify-center rounded-md p-2 text-natural-foreground hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
         
            <FiX className="text-2xl" />
          ) : (
            <FiMenu className="text-2xl" />
          )}
        </button>
  );
}

// ENTRY POINT: Header component that includes logo, navigation links, theme toggle, and user icon. It also handles the mobile menu state and rendering.
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

 // Object mapping navigation labels to their respective paths
  const navLinks: { [key: string]: string }= {
    "Inicio": "/",
    "Historia": "#OurHistory",
    "Nosotros": "/about-us",
    "Productos": "/#OurCoffees",
    "Contactos": "#Footer",
  };

  const navItems = Object.keys(navLinks); // ["Inicio", "Historia", ...]

  return (
    <header className="bg-natural w-full overflow-hidden">
      <div className="flex items-center justify-between px-4 md:px-12 h-24 max-w-screen-2xl mx-auto">
        
        {/* Mobile menu button - visible only on small screens */}
        <MobileMenuDinamycButton 
          mobileMenuOpen={mobileMenuOpen} 
          setMobileMenuOpen={setMobileMenuOpen} />

        {/* Logo */}
        <img
          src="/Logos/CDV_Banner_Logo.png"
          alt="Logo"
          className="h-16 w-auto"
        />

        {/* Desktop Navigation - hidden on mobile, visible on md and up */}
        <div className="hidden md:flex items-center gap-6 md:gap-10 ml-6">
          <nav className="relative flex items-center gap-6 md:gap-10 text-sm md:font-body">
            {navItems.map((item) => (
              <NavItem key={item} label={item} href={navLinks[item]} />
            ))}
          </nav>

          {/* Theme toggle */}
          <ThemeToggle />
          {/* User icon */}
          <FiUser className="text-2xl text-white cursor-pointer" />
        </div>
        
        {/* Mobile right actions - theme toggle and user icon visible on mobile */}
        <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <FiUser className="text-2xl text-white cursor-pointer" />
        </div>
      </div>

      {/* Mobile Menu - visible when mobileMenuOpen is true */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-natural border-t border-white/10 px-4 py-4 space-y-3">
          <nav className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <MobileNavItem
                key={item}
                label={item}
                href={navLinks[item]}
                onClick={() => setMobileMenuOpen(false)}
          />
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
