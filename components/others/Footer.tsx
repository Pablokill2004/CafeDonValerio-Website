import Image from "next/image";
import Link from "next/link";


const Footer = () => {

	// Array para mapear los links y evitar repetir código
  // Object mapping navigation labels to their respective paths
  const navLinks: { [key: string]: string }= {
      "Inicio": "/",
    "Historia": "#OurHistory",
    "Nosotros": "/about-us",
    "Productos": "/#OurCoffees",
    "Contactos": "#Footer",
  
  };
  const numero = "50247100170"; // Cambia por tu número
  const mensaje = "Hola, me gustaría más información."; // Mensaje opcional


return (
    <footer id="Footer" className="py-10 bg-natural dark:text-gray-900 font-navbar tracking-widest uppercase text-natural-foreground">
      <div className="px-6 md:px-12 max-w-screen-2xl mx-auto">
        
        {/* ========= Contenido Principal ========= */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8 mb-12">
          
          {/* 1. Logo */}
          <div className="flex items-center justify-center md:justify-start">
            <div className="relative w-48 md:w-64 aspect-[4/5]">
              <Image 
                src="/Logos/Footer_Logos/CDV_Footer_Logo.jpeg"
                alt="Brand logo" 
                fill
                sizes="(max-width: 640px) 192px, (max-width: 1024px) 256px, 320px"
                className="object-contain"
                quality={90}
              />
            </div>
          </div>

          {/* 2. Links de Navegación */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <p className="mb-6 text-lg">Café Don Valerio</p>
            <ul className="flex flex-col gap-4">
              {Object.entries(navLinks).map(([label, href]) => (
                <li key={label}>
                  <Link 
                    href={href} 
                    className="transition-colors hover:text-yellow-200 dark:hover:text-yellow-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Contactos */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <p className="mb-6 text-lg">Contactos</p>
            <div className="flex flex-col gap-6">
              
             

              {/* Contacto 2 */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-center gap-2 md:justify-start">
                  <a  href={`https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline">+502 4555 5555</a>
                  <div className="relative w-5 h-5">
                    <Image src="/Logos/Footer_Logos/whatsapp.png" alt="WhatsApp" fill className="object-cover" />
                  </div>
                </div>
                <span className="text-sm">Carlos Siquinajay</span>
              </div>
              
            </div>
          </div>
        </div>

        {/* ========= Bottom Bar (Copyright & Redes) ========= */}
        <div className="flex flex-col-reverse items-center justify-between gap-6 pt-6 mt-6 border-t border-gray-300 md:flex-row dark:border-gray-700">
          
          {/* Izquierda: Legales */}
          <div className="flex flex-col items-center gap-2 text-sm md:flex-row md:gap-6">
            <span>©{new Date().getFullYear()} All rights reserved</span>
            <a href="#" className="hover:underline">Privacy policy</a>
          </div>

          {/* Derecha: Redes */}
          <div className="flex items-center gap-4">
            <span className="text-sm md:text-lg">Síguenos</span>
            <a href="https://www.instagram.com/cafedonvalerio?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" title="Instagram" className="transition-opacity hover:opacity-80">
              <div className="relative w-8 aspect-square md:w-10">
                <Image src="/Logos/Footer_Logos/instagram.png" alt="Instagram" fill className="object-contain" />
              </div>
            </a>
            <a href="https://www.facebook.com/share/1DhuHyKKeh/?mibextid=wwXIfr" title="Facebook" className="transition-opacity hover:opacity-80">
              <div className="relative w-8 aspect-square md:w-10">
                <Image src="/Logos/Footer_Logos/facebook.png" alt="Facebook" fill className="object-contain" />
              </div>
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};
export default Footer;


