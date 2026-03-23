import Image from "next/image"
// Be careful with the path to your image, it should be relative to the public folder in Next.js
import Guipil1 from "../../public/images/others/guipil_design_1.png";
import Guipil2 from "../../public/images/others/guipil_design_2.png";
import Guipil3 from "../../public/images/others/guipil_design_3.png";

interface aligns{
  className?: string;
  designtype: string;
}
/**
 * Reusable image component that adapts to its parent container.
 * @param {string} className - to position object-<right/left>
 * @param {string} designtype - to select between 3 different designs of the same image, it should be "design-1", "design-2" or "design-3"
 * @returns A responsive image that fills its container while maintaining its aspect ratio, with optional design variations.
*/
export default function TitleDivider({className = "", designtype = ""}: aligns) {
  // Object mapping navigation labels to their respective paths

return (
    // Quitamos el p-4 para que no robe espacio vertical
    <div className="`flex w-full py-2"> 
      <div className="relative h-[10px] w-full"> {/* Controlamos el tamaño exacto aquí */}
        <Image
          src={designtype === "design-1" ? Guipil1 : designtype === "design-2" ? Guipil2 : Guipil3}
          alt="Divisor Guipil"
          fill // Ocupa el contenedor de 10px
          className={`object-contain ${className}`} // Mantiene la proporción sin estirarse
          priority
        />
      </div>
    </div>
);
}
