import Image from "next/image";
import coffeMorningBanner from "../../public/images/Home_images/coffee_morning.jpg";


const Banner = () => {
  return (
    <section className="relative w-full h-[90vh] min-h-[600px]">
      {/* Background image entirely clear*/}
      <Image
        src={coffeMorningBanner}
        alt="Café Don Valerio banner"
        fill
        priority
     
        sizes="100vw"
        className="object-cover "
      />

      {/* Overlay
      <div className="absolute inset-0 bg-black/40" />
      */}

      {/* Content 
        * inset-0; This takes up the entire hero(image)
        * items-center; centers content vertically
        * max-w-3xl; limits the width of the content SO IMPORTANT TO AVOID OVERFLOW ISSUES
        * px-6 md:px-16; responsive horizontal padding. px-6 to on medium screens, to px-16 above
        * text-left; aligns text to the left
        * text-white; sets text color to white for contrast against the background
      */}
    <div className="absolute inset-0 flex items-center">
     <div className="max-w-4xl px-6 md:px-12 text-left text-white">
     
     {/*
      * text-8xl; BASE font size
      * md:text-6xl; reduces the font size to 6xl on medium screens for better readability
      * lg:text-8xl; increases the font size back to 8xl on large screens for impact
      */}
    
        <h1 className="font-body font-regular
                    text-5xl 
                    md:text-8xl
                    lg:text-8xl">
        CAFÉ <br /> DON <br /> VALERIO
      </h1>

 
        <p className="mt-6 text-base md:text-base lg:text-lg text-white-90 
                     md:max-w-100 lg:max-w-4xl">
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto d
          e relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la impren
        </p>
    
    </div>
      </div>
    </section>
  );
};

export default Banner;
