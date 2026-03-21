import Image from "next/image"
import models from "../../components/indexComponents"

const { ModernBoxWithImage } = models;

const CoffeGTinfo = () => {
  return (
    <section className="my-16">
      <div className="flex flex-col md:flex-row items-start gap-8 p-6">
        {/* ========= 1st col ========= */}

        {/* Image — give it a fixed height so the fill image has a container */}
        <div className="w-full md:w-1/2 h-72 md:h-96 lg:h-[56rem]">
          <ModernBoxWithImage
            title="¿Qué hacen que el café guatemalteco sea único?"
            image="/images/Home_images/coffeeHistoryImage.png"
          />
        </div>

        {/* ========= 2nd col ========= */}
        <div className="w-full md:w-1/2 p-6 text-foreground">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-body pb-6">
            ¿Qué hacen que el café guatemalteco sea único?
          </h2>
          <p className="font-body lg:text-xl">
            Descubre el sabor auténtico de Guatemala con nuestro café de alta
            calidad, cultivado en las mejores regiones del país y tostado con
            pasión para ofrecerte una experiencia única en cada taza.
          </p>
          <p className="font-body lg:text-xl">
            Descubre el sabor auténtico de Guatemala con nuestro café de alta
            calidad, cultivado en las mejores regiones del país y tostado con
            pasión para ofrecerte una experiencia única en cada taza.
          </p>
          <p className="font-body lg:text-xl ">
            Descubre el sabor auténtico de Guatemala con nuestro café de alta
            calidad, cultivado en las mejores regiones del país y tostado con
            pasión para ofrecerte una experiencia única en cada taza.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoffeGTinfo;