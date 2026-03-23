import { BiLowVision } from "react-icons/bi"
import models from "../../../components/indexComponents"
import Image from 'next/image';
const { TitleDivider } = models;

// vision_and_mision.tsx
 function VisionMision() {
  return (
    // Use py-12 (vertical padding) instead of max-height
    <section className="w-full py-12 md:pb-20 px-8">
      <div className="flex flex-col max-w-7xl w-full gap-20 mx-auto">
        
        {/* Visión - Aligned Left */}
        <div className="flex flex-col items-start text-left w-full lg:w-2/3">
          <h2 className="text-5xl font-body">Visión</h2>
          <TitleDivider className="object-left" designtype="design-2"/>
          <p className="text-sm md:text-xl">
            [Tu texto de Visión aquí] Ser reconocidos a nivel internacional 
            como los pioneros en la exportación de café guatemalteco de 
            especialidad, creando un impacto positivo y sostenible 
            en las familias productoras locales...
                        [Tu texto de Visión aquí] Ser reconocidos a nivel internacional 
            como los pioneros en la exportación de café guatemalteco de 
            especialidad, creando un impacto positivo y sostenible 
            en las familias productoras locales...
                        [Tu texto de Visión aquí] Ser reconocidos a nivel internacional 
            como los pioneros en la exportación de café guatemalteco de 
            especialidad, creando un impacto positivo y sostenible 
            en las familias productoras locales...
          </p>
        </div>

        {/* Misión - Aligned Right */}
        {/* self-end pushes this specific container to the right side of the flex column */}
        <div className="flex flex-col items-end text-right w-full lg:w-2/3 self-end">
          <h2 className="text-5xl font-body">Misión</h2>
          <TitleDivider className="object-right" designtype="design-3"/>
           <p className="text-sm md:text-xl">
            [Tu texto de Misión aquí] Cultivar, procesar y distribuir 
            café de la más alta calidad mediante procesos artesanales, 
            respetando el medio ambiente y celebrando la rica herencia 
            agrícola de Guatemala...
             [Tu texto de Misión aquí] Cultivar, procesar y distribuir 
            café de la más alta calidad mediante procesos artesanales, 
            respetando el medio ambiente y celebrando la rica herencia 
            agrícola de Guatemala...
             [Tu texto de Misión aquí] Cultivar, procesar y distribuir 
            café de la más alta calidad mediante procesos artesanales, 
            respetando el medio ambiente y celebrando la rica herencia 
            agrícola de Guatemala...
          </p>
        </div>

      </div>
    </section>
  );
}
export default VisionMision;