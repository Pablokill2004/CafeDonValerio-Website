import models from "../../components/indexComponents"

const coffees = [
  {
    id: 1,
    name: "Cafe Negro",
    weight: "Peso 60 lb",
    img: "/images/Home_images/CoffesCarrousel/coffee1.png",
  },
  {
    id: 2,
    name: "Cafe Negro",
    weight: "Peso 60 lb",
    img: "/images/Home_images/CoffesCarrousel/coffee2.png",
  },
  {
    id: 3,
    name: "Cafe Negro",
    weight: "Peso 60 lb",
    img: "/images/Home_images/CoffesCarrousel/coffee1.png",
  },
  {
    id: 4,
    name: "Cafe Negro",
    weight: "Peso 60 lb",
    img: "/images/Home_images/CoffesCarrousel/coffee1.png",
  },
  {
    id: 5,
    name: "Cafe Negro",
    weight: "Peso 60 lb",
    img: "/images/Home_images/CoffesCarrousel/coffee1.png",
  },
  {
    id: 6,
    name: "Cafe Negro",
    weight: "Peso 60 lb",
    img: "/images/Home_images/CoffesCarrousel/coffee1.png",
  },
]

const { ScrollContainerCarrousel } = models;

export default function CoffeeCarousel() {
  return (
    <section className="py-16 bg-neutral-100">
      <div className="px-6 md:px-16">
        <h2 className="text-4xl md:text-5xl font-normal font-title mb-16 text-black">
          Nuestros cafés
        </h2>
        <ScrollContainerCarrousel coffees={coffees} />
      </div>
    </section>
  )
}
