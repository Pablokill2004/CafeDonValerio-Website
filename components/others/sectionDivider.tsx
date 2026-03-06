import Image from "next/image"
// Be careful with the path to your image, it should be relative to the public folder in Next.js
import Guipil from "../../public/images/others/Guipil_design.png";
export default function SectionDivider() {
  return (
    <div className="w-full">
      <Image
        src={Guipil} // tu imagen en public
        alt="Separador de sección"
        width={1920}
        height={200}
        className="w-full h-[10px] lg:h-auto object-cover"
        priority
      />
    </div>
  )
}
