import Image from "next/image";
import coffeMorningBanner from "../../public/images/Home_images/coffee_morning.jpg";


const productBanner = () => {
  return (
    <section className="relative w-full min-h-[300px]">
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
    <div className="absolute flex items-center  inset-0">
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
        Café Blend
      </h1>  

    </div>
      </div>
    </section>
  );
};

export default productBanner;
