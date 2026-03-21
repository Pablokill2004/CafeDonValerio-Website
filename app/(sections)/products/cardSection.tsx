import React from 'react';
import models from "../../../components/indexComponents";

const { ModernBoxWithImage } = models;
// Definimos la estructura de las características del producto
interface Spec {
  label: string;
  value: string;
}

// Props que recibirá nuestra tarjeta
interface ProductCardProps {
  title: string;
  image: string;
  specs: Spec[];
}

export default function ProductCard({ title, image, specs }: ProductCardProps) {
  return (
    <section className="min-h-screen p-10  flex items-center justify-center">

    {/* CONTENEDOR PRINCIPAL: 
      - flex-col en móviles (apilado)
      - md:flex-row en pantallas grandes (lado a lado)
    */}
    <div className="flex flex-col md:flex-row w-full max-w-5xl mx-auto bg-card p-6 md:p-10 shadow-lg ">
      
      {/* COLUMNA IZQUIERDA (Imagen):
        Es CRÍTICO darle un alto definido (ej. h-[400px] o md:h-[500px]) 
        porque tu componente usa `h-full` y `fill` en la imagen. 
        Si el padre no tiene altura, la imagen colapsará y no se verá.
      */}
      <div className="w-full md:w-1/2 h-[400px] md:h-[500px]">
        <ModernBoxWithImage
          title={title}
          image={image}
          backgroundBoxColor="bg-trasnparent"
        />
      </div>

      {/* COLUMNA DERECHA (Detalles):
        Usamos flex-col para enlistar hacia abajo y justify-center para centrar verticalmente.
      */}
      <div className="w-full md:w-1/2 flex flex-col justify-center gap-6 mt-8 md:mt-0 md:pl-16">
        {specs.map((spec, index) => (
          <div key={index} className="flex flex-wrap gap-2 text-xl md:text-2xl   text-card-foreground tracking-wide">
            <span className='font-title'>{spec.label}:</span>
            <span>{spec.value}</span>
          </div>
        ))}
      </div>

    </div>
    </section>
  );
}