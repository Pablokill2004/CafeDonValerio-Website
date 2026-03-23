import models from "../../components/indexComponents"
import  Coffees  from "../api/coffees.json";
// 1. Importing the list of coffees from app\api\coffees.json


const { ScrollContainerCarrousel } = models;

export default function CoffeeCarousel() {
  return (
    <section id="OurCoffees" className="py-16">
      <div className="px-6 md:px-16">
        <h2 className="text-4xl md:text-5xl font-body  mb-16">
          Nuestros cafés
        </h2>
        <ScrollContainerCarrousel coffees={Coffees} />
      </div>
    </section>
  )
}
