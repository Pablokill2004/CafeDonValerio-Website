import models from "../../../components/indexComponents"
import Image from "next/image";
const { TitleDivider } = models;

const WhoAreWev = () => {
  return(
    <section className="min-h-screen p-10 flex flex-col items-center ">
      <div className="flex flex-col lg:flex-row max-w-7xl gap-12 p-2 justify-between w-full">
        {/* Image Left */}
        {/* Image - Responsive Width & Height */}
        <div className="shadow-lg grid h-144 lg:h-[600px] w-full lg:w-1/2 place-items-center rounded-lg p-2">
          <figure className="relative w-full h-full">
            {/* Replaced <img> with Next.js <Image /> */}
            <Image 
              className="object-cover object-center rounded-xl"
              src="/images/Home_images/antigua_Guatemala.jpg"
              alt="Campos de café en Finca Don Valerio"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Glassmorphism Card */}
            <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
              <div>
                <h5 className="text-sm md:text-xl font-medium text-slate-800">
                  Finca Don Valerio
                </h5>
                <p className=" text-sm md:text-xl mt-2 text-slate-600">
                  20 July 2022
                </p>
              </div>
              <h5 className="text-sm md:text-xl font-medium text-slate-600">
                Growth
              </h5>
            </figcaption>
          </figure>
        </div>

      {/* Text Container */}
        <div className="flex flex-col w-full lg:w-1/2 justify-center text-right">
          <h1 className="text-5xl font-body ">¿Quiénes somos?</h1>
          <TitleDivider className="object-right" designtype="design-1"/>
          <p className="text-sm md:text-xl mt-4">
            Somos un emprendimineto para la produccion de cafe 100% 
            Guatemalteco.Lorem Ipsum es simplemente el texto de relleno 
            de las imprentas y archivos de texto. Lorem Ipsum ha sido 
            el texto de relleno estándar de las industrias desde el
            sum ha sido el texto de relleno estándar de las industrias desde el
          </p>
        </div>

      </div>
    </section>
  );
}
export default WhoAreWev;