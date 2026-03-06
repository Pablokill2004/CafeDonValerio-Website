import Banner from "./homeSections/Banner";
import models from "../components/indexComponents"

import SectionDivider from "../components/others/sectionDivider"
import CoffeeCarousel from "./homeSections/CoffeeCarrousel"
import CoffeGTInfo from "./homeSections/CoffeGTInfo"
import NuestraHistoria from "./homeSections/NuestraHistoria"

const { Footer } = models;
// HOME PAGE  
export default function Page() {
  return (
    <div>
     <Banner />
      
    {/* GUIPIL DIVIDER */}
    <SectionDivider />

    {/* CAFÉS */}
    <CoffeeCarousel />

    {/* GUIPIL DIVIDER */}
    <SectionDivider />

    {/*Qué hacen que el cafe sea único...*/}
    <CoffeGTInfo />

     {/* GUIPIL DIVIDER */}
    <SectionDivider />

    {/* Nuestra Historia*/}
    <NuestraHistoria />

    {/*Footer */}
    <Footer />

    </div>
   
  );
}
