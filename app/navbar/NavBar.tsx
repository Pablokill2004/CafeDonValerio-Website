import { FiUser } from "react-icons/fi";
import ThemeToggle from "../../components/others/ThemeToggle";
//  NavItem component for navigation links with hover effect
const NavItem = ({ label }: { label: string }) => (
  <div className="font-navbar cursor-pointer uppercase relative overflow-hidden group">
    <span className="block tracking-[3px] text-sm text-textDesignColor transition-transform duration-300 group-hover:translate-y-full">
      {label}
    </span>
    <span className="absolute inset-0 tracking-[3px] text-sm text-textDesignColor -translate-y-full transition-transform duration-300 group-hover:translate-y-0">
      {label}
    </span>
  </div>
);

const Header = () => {
  return (
    <header className="bg-[#916326] w-full overflow-hidden">
      <div className="flex items-center justify-between px-4 md:px-12 h-24 max-w-screen-2xl mx-auto">
          
          {/* Logo */}
          <img
            src="/Logos/CDV_Banner_Logo.png"
            alt="Logo"
            className="h-16 w-auto"
          />
        

        {/* Navigation */}
           {/* Left-aligned nav + user */}
        <div className="flex items-center gap-6 md:gap-10 ml-6">
          <nav className="flex items-center gap-6 md:gap-10 text-sm md:text-base">
            <NavItem label="Inicio" />
            <NavItem label="Historia" />
            <NavItem label="Nosotros" />
            <NavItem label="Productos" />
            <NavItem label="Contactos" />
          </nav>

         {/* Theme toggle */}
          <ThemeToggle/>
          {/* User icon */}
          <FiUser className="text-2xl text-white cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;
