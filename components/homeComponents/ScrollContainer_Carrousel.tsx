import Image from "next/image"

interface Coffee {
  id: string | number
  img: string
  name: string
  weight: string
}

export default function ScrollContainerCarrousel({ coffees }: { coffees: Coffee[] }) {
  return (
    <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4">
      {coffees.map((coffee) => (
        <div
          key={coffee.id}
          className="min-w-80 md:min-w-96 bg-white shadow-md snap-start p-12 flex flex-col overflow-hidden"
        >
          <div className="relative aspect-square w-full">
            <Image
              src={coffee.img}
              alt={coffee.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 320px, 384px"
            />
          </div>

          <h3 className="mt-4 text-xl font-medium text-black">{coffee.name}</h3>
          <p className="text-base text-neutral-600">{coffee.weight}</p>

          <button className="mt-8 mx-auto bg-accent hover:bg-accent-hover transition-colors duration-200 px-6 py-2 rounded-full text-sm font-medium w-fit text-black">
            Ver más
          </button>
        </div>
      ))}
    </div>
  )
}