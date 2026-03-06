import Image from "next/image";

interface ModernBoxWithImageProps {
  title: string;
  image: string;
  className?: string;
  quality?: number;
  unoptimized?: boolean;
  backgroundBoxColor?: string; // Optional background color for the box
}

/**
 * Reusable image component that adapts to its parent container.
 * @param {string} title - Alt text for the image.
 * @param {string} image - Path to the image.
 * @param {string} [className] - Optional extra classes for the wrapper.
 */
function ModernBoxWithImage({ title, image, className = "", quality = 90, unoptimized = false, backgroundBoxColor }: ModernBoxWithImageProps) {
  return (  
   <div className= {`w-full h-full border border-neutral-300  ${backgroundBoxColor} shadow-sm p-6`}>
      <div className={`relative w-full h-full ${className}`}>
      <Image
        src={image}
        alt={title}
        fill
        quality={quality}
        unoptimized={unoptimized}
        /*
        * Si la pantalla es ≤ 768px
            => la imagen ocupará 100% del ancho de pantalla
            => móvil: imagen más pequeña (rápida)
        * Si es mayor
            => ocupará 50% del ancho
            => desktop:imagen más grande (nítida)
         */
        sizes="(max-width: 768px) 100vw, 50vw"// Responsive image sizes
        className="object-cover "
      />
    </div>
    </div>
  );
}

export default ModernBoxWithImage;
