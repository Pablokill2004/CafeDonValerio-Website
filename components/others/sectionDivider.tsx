import Image from "next/image"
// Be careful with the path to your image, it should be relative to the public folder in Next.js
import Guipil from "../../public/images/others/guipil_design(x3).png";
export default function SectionDivider() {
  return (
    <div className="w-full">
      <Image
        src={Guipil}
        alt=""
        width={1920}
        height={50}
        className="w-full h-auto max-h-[20px] lg:max-h-[40px] object-contain"
        priority
      />
    </div>
  )
}
