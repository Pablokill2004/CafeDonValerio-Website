import Image from "next/image";

const NuestraHistoriaBanner = () => {
  return (
    <div className="relative flex flex-row h-32 md:h-64 lg:h-80">

      {/* Imagen izquierda */}
      <div className="relative flex-1">
        <Image
          src="/images/Home_images/antigua_Guatemala1.png"
          fill
          sizes="50vw"
          alt="Antigua Guatemala 1"
          className="object-cover brightness-60"
        />
      </div>

      {/* Título centrado sobre ambas */}
      <h1 className="
        absolute inset-0
        z-10
        flex items-center justify-center
        text-white
        text-4xl md:text-6xl
        font-body
        text-center
        pointer-events-none
      ">
        Nuestra Historia
      </h1>

      {/* Imagen derecha */}
      <div className="relative flex-1">
        <Image
          src="/images/Home_images/antigua_Guatemala2.png"
          fill
          sizes="50vw"
          alt="Antigua Guatemala 2"
          className="object-cover brightness-60"
        />
      </div>

    </div>
  );
};

export default NuestraHistoriaBanner;